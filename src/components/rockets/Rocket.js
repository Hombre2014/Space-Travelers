import React from 'react';
import PropTypes from 'prop-types';
import ReservedButton from './ReserveButton';
import './Rocket.css';

const Rocket = (props) => {
  const {
    id, name, description, images, reserved,
  } = props;
  return (
    <div className="rocketContainer">
      <div className="rocketData">
        <div className="rocketImage">
          <img src={images[0]} alt="" />
        </div>
        <div className="rocketDescription">
          <h2 className="rocketName">{name}</h2>
          <div className="reservationSection">
            { reserved ? <span style={{ backgroundColor: '#26a7bc', fontSize: '0.875rem', padding: '1px 3px' }} className="rButton" disabled type="button">Reserved</span>
              : ''}
            <span className="description">{description}</span>
          </div>
          <ReservedButton reserved={reserved} id={id} />
        </div>
      </div>
    </div>
  );
};

Rocket.defaultProps = {
  reserved: false,
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

export default Rocket;
