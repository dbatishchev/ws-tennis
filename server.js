const autobahn = require('autobahn');
const WampServer = require('wamp-server');

const server = new WampServer({
  port: 8000,
  realms: ['realm1'], // array or string
});

const connection = new autobahn.Connection({ url: `ws://127.0.0.1:${server.port}/`, realm: 'realm1' });
const rooms = {};

connection.onopen = (session) => {
  // // 1) subscribe to a topic
  // function onevent(args) {
  //   console.log('Event:', args[0]);
  // }
  // session.subscribe('com.myapp.hello', onevent);

  // // 2) publish an event
  // session.publish('com.myapp.hello', ['Hello, world!']);

  // 3) register a procedure for remoting

  // todo subscriptions
  // https://github.com/crossbario/autobahn-js/blob/master/doc/reference.md

  session.register('login', ([roomId]) => {
    const isRoomExists = Boolean(rooms[roomId]);

    if (!isRoomExists) {
      return {
        status: 'error',
        error: 'Room does not exist',
        content: null,
      };
    }

    rooms[roomId].players += 1;

    connection.session.publish(`com.tennis.${roomId}.status.change`, ['Hello, world!']);

    return {
      status: 'success',
      error: null,
      content: roomId,
    };
  });

  session.register('create-room', ([roomId]) => {
    const isRoomExists = Boolean(rooms[roomId]);

    if (isRoomExists) {
      return {
        status: 'error',
        error: 'Room does not exist',
        content: null,
      };
    }

    rooms[roomId] = {
      players: 1,
    };

    return {
      status: 'success',
      error: null,
      content: roomId,
    };
  });
};

connection.open();
