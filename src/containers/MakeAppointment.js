import React, { useState } from 'react';

import PropTypes from 'prop-types';

import createAppointment from '../API/createAppointment';

const MakeAppointment = ({ apartmentId }) => {
  const [message, setMessage] = useState('');

  const handleAppointmentSubmit = event => {
    event.preventDefault();

    createAppointment(event.target.children[0].value, apartmentId)
      .then(message => setMessage(message));
  };

  return (
    <>
      <p>{message}</p>
      <form onSubmit={handleAppointmentSubmit}>
        <input type="datetime-local" />
        <button type="submit">Make An Appointment</button>
      </form>
    </>
  );
};

MakeAppointment.propTypes = {
  apartmentId: PropTypes.string.isRequired,
};

export default MakeAppointment;
