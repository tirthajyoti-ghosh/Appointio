import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
  const initialState = {
    email: '',
    password: '',
    errors: '',
  };

  const [user, setUser] = useState(initialState);

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const {
      email, password,
    } = user;

    axios.post('http://localhost:3001/login', {
      user: {
        email, password,
      },
    },
    { withCredentials: true })
      .then(response => {
        if (response.data.logged_in === true) props.handleSuccessfulAuth(response.data);
      })
      .catch(error => console.log('registration error', error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" name="email" onChange={handleChange} value={user.email} required />
        <input type="password" placeholder="Password" name="password" onChange={handleChange} value={user.password} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
