import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { setSuccessStatusActionCreator } from '../status/action';

function receiveThreadsActionCreator(threads) {
  return {
    type: 'threads/receive',
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: 'thread/add',
    payload: {
      thread,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
      dispatch(setSuccessStatusActionCreator(true));
      toast.success('berhasil menambahkan thread!', {
        theme: 'colored',
        icon: '🚀',
      });
    } catch (error) {
      toast.error(error.message, {
        theme: 'colored',
      });
    }
    dispatch(hideLoading());
  };
}

export { receiveThreadsActionCreator, addThreadActionCreator, asyncAddThread };
