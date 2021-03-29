import React from "react";
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

  function handleClick() {
      console.log('fazer Login')
      navigate('/')
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
