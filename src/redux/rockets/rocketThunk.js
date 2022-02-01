import axios from 'axios';
import { fetchRocket } from './rocketsReducer';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const getRockets = () => async (dispatch) => {
  await axios.get(baseUrl)
    .then((res) => {
      const { data } = res;
      dispatch(fetchRocket(data));
    });
};

export default getRockets;
