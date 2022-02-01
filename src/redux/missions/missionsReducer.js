const GET_MISSIONS = 'space-travelers/missions/GET_MISSIONS';

export const initialState = [];

export const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
