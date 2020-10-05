import React, { useState } from 'react';
import axios from 'axios';

const Registrations = props => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
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
      // eslint-disable-next-line camelcase
      name, email, password, password_confirmation,
    } = user;

    axios.post('http://localhost:3001/registrations', {
      user: {
        name, email, password, password_confirmation,
      },
    },
    { withCredentials: true })
      .then(response => console.log('registration res', response))
      .catch(error => console.log('registration error', error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" onChange={handleChange} value={user.name} required />
        <input type="email" placeholder="Email" name="email" onChange={handleChange} value={user.email} required />
        <input type="password" placeholder="Password" name="password" onChange={handleChange} value={user.password} required />
        <input type="password" placeholder="Password Confimation" name="password_confirmation" onChange={handleChange} value={user.password_confirmation} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registrations;
