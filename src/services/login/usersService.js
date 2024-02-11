import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_API_URL}/api/users`; 

const usersService = async (method, endpoint, data) => {
  try {
    var token = sessionStorage.getItem('token');
    const response = await axios({
      method,
      url: `${apiUrl}/${endpoint}`,
      data
    });

    return response.data;
  } catch (error) {
    error.message = error.response.data.errors.exception;
    throw error;
  }
};

export default usersService;
