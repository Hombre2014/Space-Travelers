import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

function MyProfile() {
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
      </section>
    </div>
  );
}

export default MyProfile;
