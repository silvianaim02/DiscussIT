function usersReducer(users = [], action = {}) {
  switch (action.type) {
    case 'users/receive':
      return action.payload.users;
    default:
      return users;
  }
}

export default usersReducer;
