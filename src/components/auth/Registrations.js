import React, { useState } from 'react';

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
    console.log('form submitted');
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" onChange={handleChange} value={user.name} required />
        <input type="email" placeholder="Email" name="email" onChange={handleChange} value={user.email} required />
        <input type="password" placeholder="Password" name="password" onChange={handleChange} value={user.password} required />
        <input type="password" placeholder="Password Confimation" name="password_confimation" onChange={handleChange} value={user.password_confirmation} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registrations;
