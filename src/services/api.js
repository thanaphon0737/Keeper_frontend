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

export const fetchNotes = async (userId,q,page = 1,limit = 10) => {
    
    const res = await axios.get(`${API_URL}/api/users/${userId}/notes?q=${q}&page=${page}&limit=${limit}`,{ withCredentials:true})

  return res;
}

export const createNote = async (userId, note) =>{
  const res = await axios.post(`${API_URL}/api/users/${userId}/notes`,{
    title: note.title || null,
    content: note.content || null
  }, {withCredentials: true});
  return res;

}

 export const editNote = async (userId,noteId, note) => {
  const res = await axios.put(`${API_URL}/api/users/${userId}/notes/${noteId}`,
    {
      title: note.title || null,
      content: note.content || null
    }, {withCredentials: true});
  return res;
 }

 export const deleteNote = async (userId,noteId) => {
  const res = await axios.delete(`${API_URL}/api/users/${userId}/notes/${noteId}`,
   {withCredentials: true}
  );
  return res;
 }

 export const getTags = async () => {
  const res = await axios.get(`${API_URL}/api/notes/tags`,{withCredentials:true})
  return res
 }