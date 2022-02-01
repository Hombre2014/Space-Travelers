const FETCH_ROCKET = 'rocketStore/rockets/FETCH_ROCKET';

const initialState = [];

export const fetchRocket = (payload) => ({
  type: FETCH_ROCKET,
  payload,
});

const reducer = (state = initialState, action) => {
  if (action.type === FETCH_ROCKET) {
    return [...action.payload];
  }
  return state;
};

export default reducer;
