import axios from 'axios';
import { server } from '../reduxstore';
export const login = (email, password) => {
  return async dispatch => {
    try {
      dispatch({ type: 'loginRequest' });

      const { data } = await axios.post(
        `${server}/login`,
        { email, password },
        {
          headers: {
            'Content-type': 'application/json',
          },
          withCredentials: true,
        }
      );
  
      dispatch({ type: 'loginSuccess', payload: data });
    } catch (error) {
     
      dispatch({ type: 'loginfail', payload: error?.response?.data?.error });
    }
  };
};

export const registeruser = formdata => {
  return async dispatch => {
    try {
      dispatch({ type: 'registerRequest' });

      const { data } = await axios.post(`${server}/register`, formdata, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        withCredentials: true,
      });
 
      dispatch({ type: 'registerSuccess', payload: data });
    } catch (error) {
    
      dispatch({ type: 'registerfail', payload: error?.response?.data?.error});
    }
  };
};

export const getmyprofile = () => {
  return async dispatch => {
    try {
      dispatch({ type: 'loaduserRequest' });
     const { data } = await axios.get(`${server}/me`, {
        withCredentials: true,
      });
     
      dispatch({ type: 'loaduserSuccess', payload: data.user });
    } catch (error) {
      
      dispatch({ type: 'loaduserfail', payload: error?.response?.data?.error });
    }
  };
};

export const loogut = () => {
  return async dispatch => {
    try {
      dispatch({ type: 'logoutRequest' });
   
      const { data } = await axios.get(`${server}/logout`, {
  withCredentials: true,
      });

      dispatch({ type: 'logoutSuccess', payload: data.user });
    } catch (error) {
      
      dispatch({ type: 'logoutfail', payload: error?.response?.data?.error });
    }
  };
};
