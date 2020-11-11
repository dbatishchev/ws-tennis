import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Heading from '../Heading/Heading';
import Label from '../Label/Label';
import Separator from '../Separator/Separator';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './Login.module.css';
import SessionContext from '../../contexts/SessionContext';
import { setRoomId } from '../../actions/session';
import { RPC_STATUS_ERROR } from '../../constants/rpcStatuses';

function Login() {
  const { dispatch, state: { roomId, connection } } = useContext(SessionContext);
  const [roomIdInputValue, setRoomIdInputValue] = useState('');
  const [loginError, setLoginError] = useState('');
  const history = useHistory();

  if (roomId) {
    return <Redirect to="/" />;
  }

  const handleRoomIdChange = (e) => {
    setRoomIdInputValue(e.target.value);
    setLoginError('');
  };

  const handleLoginClick = () => {
    const handleSuccess = (res) => {
      if (res.status === RPC_STATUS_ERROR) {
        setLoginError(`Login Failed: ${res.error}`);
        return;
      }

      dispatch(setRoomId(roomIdInputValue));
      history.push('/');
    };

    const handleFail = () => {
      setLoginError('Login Failed');
    };

    connection.session.call('login', [roomIdInputValue])
      .then(handleSuccess)
      .catch(handleFail);
  };

  const handleCreateNewRoomClick = () => {
    history.push('/create');
  };

  return (
    <div className={styles.loginPage}>
      <div>
        <Heading>Login into room</Heading>
        <div className={styles.loginForm}>
          <Label hasError={loginError !== ''}>Room ID</Label>
          <TextInput type="text" onChange={handleRoomIdChange} value={roomIdInputValue} />
          <div className={styles.btnWrapper}>
            <Button type="submit" onClick={handleLoginClick}>Login</Button>
          </div>
        </div>
        <Separator>OR</Separator>
        <div>
          <Button type="submit" onClick={handleCreateNewRoomClick}>Create New</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
