import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Appointments = props => {
  const [appointments, setAppointments] = useState([]);

  const getAllAppointments = () => axios
    .get('http://localhost:3001/appointments', { withCredentials: true }).then(response => (response.data.appointments));

  useEffect(() => {
    getAllAppointments().then(appointments => setAppointments(appointments));
  }, []);

  return (
    <div>
      <h1>Appointments</h1>
      <h2>
        Name: { props.user.name }
      </h2>

      <ul>
        {
          appointments.map(appointment => (
            <li key={appointment.id}>{appointment.date}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Appointments;
