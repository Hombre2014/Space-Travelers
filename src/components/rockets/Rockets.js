import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Rocket from './Rocket';

function Rockets() {
  const availableRockets = useSelector((state) => state.rocketsReducer);

  return (
    <div>
      { availableRockets.map((rocket) => (
        <Rocket
          key={uuidv4()}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          images={rocket.images[0]}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
}

export default Rockets;
