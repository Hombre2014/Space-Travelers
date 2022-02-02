import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Profile = () => {
  const availabeRockets = useSelector((state) => state.rocketsReducer);

  console.log('profile', availabeRockets);
  return (
    <div>
      <section>
        <h2>My Missions</h2>

      </section>
      <section>
        <h2>My Rockets</h2>
        <ul>
          {availabeRockets
            && availabeRockets
              .filter((rocket) => rocket.reserved === true)
              .map((reserved) => (
                <li key={uuidv4()}>
                  {reserved.name}
                </li>
              ))}
        </ul>
      </section>
    </div>
  );
};

export default Profile;
