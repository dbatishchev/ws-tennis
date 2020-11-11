import { SESSION_SET_CONNECTION, SESSION_SET_GAME_STATUS, SESSION_SET_ROOM_ID } from '../actions/session';

export default function (state, action, dispatch) {
  switch (action.type) {
    case SESSION_SET_CONNECTION:
      return {
        ...state,
        connection: action.connection,
      };
    case SESSION_SET_ROOM_ID:
      return {
        ...state,
        roomId: action.roomId,
      };
    case SESSION_SET_GAME_STATUS:
      return {
        ...state,
        gameStatus: action.gameStatus,
      };
    default:
      throw new Error();
  }
}
