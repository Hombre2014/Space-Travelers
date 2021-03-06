import { getMissions } from './missionsReducer';

const URL = 'https://api.spacexdata.com/v3/missions';

const missionsFetch = () => async (dispatch) => {
  const res = await fetch(URL);
  const missions = await res.json();

  dispatch(getMissions(missions.slice(0, 4)));
};

export default missionsFetch;
