import ApiBuilder from "../helpers/ApiBuilder";

/**
 *
 * POST : loginUser
 *
 */
const loginUser = userData => {
  return ApiBuilder.API.post(`/api/users/login`, userData);
};

/**
 *
 * POST : registerUser
 *
 */
const registerUser = userData => {
  return ApiBuilder.API.post(`/api/users/register`, userData);
};

export default {
  loginUser,
  registerUser
};
