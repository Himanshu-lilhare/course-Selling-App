import axios from 'axios';
import { server } from '../reduxstore';
export const getSubscription = () => async dispatch => {
  try {
    dispatch({ type: 'getSubscriptionSRequest' });
    
    const { data } = await axios.get(`${server}/subscribe`, {
      withCredentials: true,
    });
    
    dispatch({ type: 'getSubscriptionSuccess', payload: data.subscriptionid });
  } catch (error) {
   
    dispatch({
      type: 'getSubscriptionFail',
      payload: error.response.data.error,
    });
  }
};

export const cancleSubscription = () => async dispatch => {
  try {
    dispatch({ type: 'cancleSubscriptionRequest' });
    
    const { data } = await axios.delete(`${server}/canclesubscription`, {
      withCredentials: true,
    });

    dispatch({ type: 'cancleSubscriptionSuccess', payload: data.message });
  } catch (error) {
 
    dispatch({
      type: 'cancleSubscriptionFail',
      payload: error.response.data.error,
    });
  }
};
