import React, {useContext, useState} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import Error from 'src/components/Error/Error';
import SessionContext from '../../contexts/SessionContext';
import Heading from '../Heading/Heading';
import Label from '../Label/Label';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './CreateRoom.module.css';

CreateRoom.propTypes = {};

const createRoom = (roomId, onSuccess, onFail) => {
  const socket = io('http://localhost:3001');

  socket.on('connect', function() {
    socket.emit('create-room', roomId);

    socket.on('post-create-room', function(data) {
      if (data.status === 2) {
        onFail();
      } else {
        onSuccess();
      }
    });
  });

  // socket.on('message', function(data) {
  //   console.log('message');
  //   console.log('Incoming message:', data);
  // });
  //
  // socket.on('message', function(data) {
  //   console.log('message');
  //   console.log('Incoming message:', data);
  // });
}

function CreateRoom(props) {
  const [roomId, setRoomId] = useState('');
  const [createRoomError, setCreateRoomError] = useState('');
  const session = useContext(SessionContext);
  const history = useHistory();

  if (session.roomId !== null) {
    return <Error>Are already loggen in</Error>;
  }

  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value);
    setCreateRoomError('');
  };

  const handleCreateRoomClick = () => {
    const handleSuccess = () => {
      history.push("/");
    };
    const handleFail = () => {
      setCreateRoomError('CreateRoom Failed');
    }

    createRoom(roomId, handleSuccess, handleFail);
  }

  return (
    <div className={styles.createRoomPage}>
      <div>
        <Heading>Create Room</Heading>
        <div className={styles.createRoomForm}>
          <Label>Room ID</Label>
          <TextInput  type="text" onChange={handleRoomIdChange} value={roomId} />
          <div className={styles.btnWrapper}>
            <Button type="submit" onClick={handleCreateRoomClick}>Create</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRoom;
