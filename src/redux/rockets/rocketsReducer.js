const FETCH_ROCKET = 'rocketStore/rockets/FETCH_ROCKET';

const initialState = [];

export const fetchRocket = (payload) => ({
  type: FETCH_ROCKET,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
