function authUserReducer(authUser = null, action = {}) {
  switch (action.type) {
    case 'authUser/set':
      return action.payload.authUser;
    case 'authUser/clear':
      return null;
    default:
      return authUser;
  }
}

export default authUserReducer;
