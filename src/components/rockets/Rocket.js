import React from 'react';
import PropTypes from 'prop-types';
import ReservedButton from './ReserveButton';
import './Rocket.css';

const Rocket = (props) => {
  const { name, description, images } = props;
  return (
    <div className="rocketContainer">
      <div className="rocketData">
        <div className="rocketImage">
          <img src={images[0]} alt="" />
        </div>
        <div className="rocketDescription">
          <h2 className="rocketName">{name}</h2>
          <p className="description">{description}</p>
          <ReservedButton />
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

export default Rocket;
