/**
 * @format
 * @TODO: Define all the actions (creator) for the users state
 */
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
    try {
      await api.register({ name, email, password });
      dispatch(setSuccessStatusActionCreator(true));
    } catch (error) {
      toast.error(error.message, {
        theme: 'colored',
      });
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
