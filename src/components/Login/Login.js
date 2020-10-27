import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import Heading from '../Heading/Heading';
import Label from '../Label/Label';
import Separator from '../Separator/Separator';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './Login.module.css';

Login.propTypes = {};

const login = (roomId, onSuccess, onFail) => {
  const socket = io('http://localhost:3001');

  socket.on('connect', function() {
    socket.emit('login', roomId);

    socket.on('post-login', function(data) {
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

function Login(props) {
  const [roomId, setRoomId] = useState('');
  const [loginError, setLoginError] = useState('');
  const history = useHistory();

  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value);
    setLoginError('');
  };

  const handleLoginClick = () => {
    const handleSuccess = () => {
      history.push("/");
    };
    const handleFail = () => {
      setLoginError('Login Failed');
    }

    login(roomId, handleSuccess, handleFail);
  }

  const handleCreateNewRoomClick = () => {
    history.push("/create");
  }

  return (
    <div className={styles.loginPage}>
      <div>
        <Heading>Login into room</Heading>
        <div className={styles.loginForm}>
          <Label>Room ID</Label>
          <TextInput  type="text" onChange={handleRoomIdChange} value={roomId} />
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
