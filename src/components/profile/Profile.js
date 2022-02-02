import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './profile.css';

const Profile = () => {
  const availabeRockets = useSelector((state) => state.rocketsReducer);
  const missions = useSelector((state) => state.missionsReducer);
  return (
    <div className="container">
      <section className="missions">
        <h2>My Missions</h2>
        <table className="missions-table">
          <tbody>
            {missions
              && missions
                .filter((mission) => mission.reserved === true)
                .map((reserve) => (
                  <tr className="row" key={reserve.mission_id}>
                    <td>{reserve.mission_name}</td>
                  </tr>
                ))}
          </tbody>
        </table>
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
