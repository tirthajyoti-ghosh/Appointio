import React, { useState } from 'react';

import PropTypes from 'prop-types';

import createAppointment from '../API/createAppointment';

const MakeAppointment = ({ apartmentId, token }) => {
  const [message, setMessage] = useState('');

  const handleAppointmentSubmit = event => {
    event.preventDefault();

    createAppointment(event.target.children[0].value, apartmentId, token)
      .then(message => setMessage(message));
  };

  return (
    <>
      <form onSubmit={handleAppointmentSubmit}>
        <input type="datetime-local" />
        <button type="submit">Make An Appointment</button>
        <p>{message}</p>
      </form>
    </>
  );
};

MakeAppointment.propTypes = {
  apartmentId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default MakeAppointment;
