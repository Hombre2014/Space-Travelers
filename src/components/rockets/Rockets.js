import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Rocket from './Rocket';

function Rockets() {
  const availabeRockets = useSelector((state) => state.rocketsReducer);

  return (
    <div>
      { availabeRockets.map((rocket) => (
        <Rocket
          key={uuidv4()}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          images={rocket.images}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
}

export default Rockets;
