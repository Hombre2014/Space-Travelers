/* eslint-disable camelcase */
import { getMissions } from './missionsReducer';

const URL = 'https://api.spacexdata.com/v3/missions';

const missionsFetch = () => async (dispatch) => {
  const res = await fetch(URL);
  const missions = await res.json();

  // console.log(data);
  // const missions = res.data();
  console.log(missions);

  // const missions = Object.entries(data).map(([mission_id, missionInfo]) => {
  //   const { mission_name, description } = missionInfo[0];
  //   console.log(missionInfo[0]);
  //   return {
  //     mission_id,
  //     mission_name,
  //     description,
  //   };
  // });
  dispatch(getMissions(missions));
};

export default missionsFetch;
