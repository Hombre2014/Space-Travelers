import { fetchRocket } from './rocketsReducer';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const getRockets = () => async (dispatch) => {
  const response = await fetch(baseUrl);
  let finalResponse = await response.json();

  finalResponse = finalResponse.map((rocket) => (
    {
      id: rocket.id,
      description: rocket.description,
      name: rocket.rocket_name,
      images: rocket.flickr_images,
    }));
  dispatch(fetchRocket(finalResponse));
};

export default getRockets;
