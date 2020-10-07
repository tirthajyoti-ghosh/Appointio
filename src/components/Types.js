import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Types = props => {
  const [types, setTypes] = useState([]);

  const getAllTypes = () => axios
    .get('http://localhost:3001/types', { withCredentials: true }).then(response => (response.data.types));

  useEffect(() => {
    getAllTypes().then(types => setTypes(types));
  }, []);

  return (
    <div>
      <h1>Types</h1>
      <h2>
        Name: { props.user.name }
      </h2>

      <ul>
        {
          types.map(type => (
            <li key={type.id}>{type.name}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Types;
