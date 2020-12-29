import types from "../configs/types";

const initialState = {
  islogged: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.login:
      return {
        islogged: true,
        ...payload,
      };
    case types.logout:
      return {
        islogged: false,
      };

    default:
      return state;
  }
};
export default authReducer;
