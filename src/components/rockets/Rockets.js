import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import getRockets from '../../redux/rockets/rocketThunk';
import Rocket from './Rocket';

function Rockets() {
  const availabeRockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
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
