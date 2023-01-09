function successStatusReducer(successStatus = false, action = {}) {
  switch (action.type) {
    case 'successStatus/set':
      return action.payload.successStatus;
    default:
      return successStatus;
  }
}

export default successStatusReducer;
