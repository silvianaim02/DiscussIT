function isPreloadReducer(isPreload = true, action = {}) {
  switch (action.type) {
    case 'isPreload/set':
      return action.payload.isPreload;
    default:
      return isPreload;
  }
}

export default isPreloadReducer;
