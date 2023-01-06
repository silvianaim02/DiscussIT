import { ActionType } from './action';

function successStatusReducer(successStatus = false, action = {}) {
  switch (action.type) {
    case ActionType.SET_SUCCESS_STATUS:
      return action.payload.successStatus;
    default:
      return successStatus;
  }
}

export default successStatusReducer;
