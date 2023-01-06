const ActionType = {
  SET_SUCCESS_STATUS: 'SET_SUCCESS_STATUS',
};

function setSuccessStatusActionCreator(status) {
  return {
    type: ActionType.SET_SUCCESS_STATUS,
    payload: {
      successStatus: status,
    },
  };
}

export { ActionType, setSuccessStatusActionCreator };
