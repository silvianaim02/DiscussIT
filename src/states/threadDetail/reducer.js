function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case 'threadDetail/receive':
      return action.payload.threadDetail;
    case 'threadDetail/clear':
      return null;
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
