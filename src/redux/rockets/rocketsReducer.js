const FETCH_ROCKET = 'rocketStore/rockets/FETCH_ROCKET';
const RESERVE_ROCKET = 'rocketStore/rockets/RESERVE_ROCKET';
const UNRESERVE_ROCKET = 'rocketStore/rockets/UNRESERVE_ROCKET';

const initialState = [];

export const fetchRocket = (payload) => ({
  type: FETCH_ROCKET,
  payload,
});

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

export const unreserveRocket = (id) => ({
  type: UNRESERVE_ROCKET,
  payload: id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return [...action.payload];
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
    case UNRESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export default reducer;
