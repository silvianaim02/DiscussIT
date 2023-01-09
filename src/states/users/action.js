import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { setSuccessStatusActionCreator } from '../status/action';

function receiveUsersActionCreator(users) {
  return {
    type: 'users/receive',
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.register({ name, email, password });
      dispatch(setSuccessStatusActionCreator(true));
    } catch (error) {
      toast.error(error.message);
    }
    dispatch(hideLoading());
  };
}

export { receiveUsersActionCreator, asyncRegisterUser };
