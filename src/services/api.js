import axios from "axios";

const API_URL = "http://localhost:3000";
export const loginUser = async (email, password) => {
  const res = await axios.post(
    `${API_URL}/api/users/login`,
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );
  return res;
};

export const getUserProfile = async (userId) => {
  const res = await axios.get(`${API_URL}/api/users/${userId}`, {
    withCredentials: true,
  });
  return res.data;
};

export const registerUser = async (username, email, password) => {
  const res = await axios.post(
    `${API_URL}/api/users/register`,
    {
      username,
      email,
      password,
    },
    { withCredentials: true }
  );
  return res;
};
export const logoutUser = async () => {
  const res = await axios.get(`${API_URL}/api/users/logout`, {
    withCredentials: true,
  });
};
