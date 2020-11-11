import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Error from '../Error/Error';
import SessionContext from '../../contexts/SessionContext';
import Heading from '../Heading/Heading';
import Label from '../Label/Label';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './CreateRoom.module.css';
import { setGameStatus, setRoomId } from '../../actions/session';
import { GAME_STATUS_ACTIVE, GAME_STATUS_WAITING } from '../../constants/gameStatuses';
import { RPC_STATUS_ERROR } from '../../constants/rpcStatuses';

function CreateRoom(props) {
  const [roomIdInputValue, setRoomIdInputValue] = useState('');
  const [createRoomError, setCreateRoomError] = useState('');
  const { dispatch, state: { roomId, connection } } = useContext(SessionContext);
  const history = useHistory();

  if (roomId !== null) {
    return <Error>Are already logged in</Error>;
  }

  const handleRoomIdInputValueChange = (e) => {
    setRoomIdInputValue(e.target.value);
    setCreateRoomError('');
  };

  const handleCreateRoomClick = () => {
    const handleSuccess = (res) => {
      if (res.status === RPC_STATUS_ERROR) {
        setCreateRoomError(`Room Creation Failed: ${res.error}`);
        return;
      }

      connection.session.subscribe(`com.tennis.${roomIdInputValue}.status.change`, (args, kwargs, event, subscription) => {
        dispatch(setGameStatus(GAME_STATUS_ACTIVE));
        subscription.unsubscribe(`com.tennis.${roomIdInputValue}.status.change`);
      });

      dispatch(setRoomId(roomIdInputValue)); // todo
      dispatch(setGameStatus(GAME_STATUS_WAITING)); // todo

      history.push('/');
    };

    const handleFail = () => {
      setCreateRoomError('Room Creation Failed');
    };

    connection.session.call('create-room', [roomIdInputValue])
      .then(handleSuccess)
      .catch(handleFail);
  };

  return (
    <div className={styles.createRoomPage}>
      <div>
        <Heading>Create Room</Heading>
        <div className={styles.createRoomForm}>
          <Label hasError={createRoomError !== ''}>Room ID</Label>
          <TextInput type="text" onChange={handleRoomIdInputValueChange} value={roomIdInputValue} />
          <div className={styles.btnWrapper}>
            <Button type="submit" onClick={handleCreateRoomClick}>Create</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRoom;
