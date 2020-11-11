export const SESSION_SET_ROOM_ID = 'SESSION_SET_ROOM_ID';
export const SESSION_SET_CONNECTION = 'SESSION_SET_CONNECTION';
export const SESSION_SET_GAME_STATUS = 'SESSION_SET_GAME_STATUS';

export function setRoomId(roomId) {
  return { type: SESSION_SET_ROOM_ID, roomId };
}

export function setConnection(connection) {
  return { type: SESSION_SET_CONNECTION, connection };
}

export function setGameStatus(gameStatus) {
  return { type: SESSION_SET_GAME_STATUS, gameStatus };
}
