import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './ReserveButton.css';
import { reserveRocket, unreserveRocket } from '../../redux/rockets/rocketsReducer';

const ReservedButton = (props) => {
  const { id, reserved } = props;
  const dispatch = useDispatch();

  const reserve = () => {
    dispatch(reserveRocket(id));
  };

  const unreserve = () => {
    dispatch(unreserveRocket(id));
  };
  return (
    <span>
      { reserved ? <button onClick={unreserve} className="rButton clicked" type="button">Cancel Reservation</button>
        : <button onClick={reserve} className="rButton" type="button">Reserve Rocket</button>}
    </span>
  );
};

ReservedButton.defaultProps = {
  reserved: false,
};

ReservedButton.propTypes = {
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool,
};

export default ReservedButton;
