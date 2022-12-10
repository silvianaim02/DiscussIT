/**
 * @format
 *
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { setSuccessStatusActionCreator } from '../status/action';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
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
      toast.error(error.message, {
        theme: 'colored',
      });
    }
    dispatch(hideLoading());
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
