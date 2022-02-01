import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getRockets from '../../redux/rockets/rocketThunk';

function Rockets() {
  const availabeRockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  },[dispatch]);

  console.log(availabeRockets);

  return (
    <div>
      { availabeRockets.map((rocket) => <p key={rocket.id}>{rocket.rocket_name}</p>)}
    </div>
  );
}

export default Rockets;
