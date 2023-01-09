function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case 'threads/receive':
      return action.payload.threads;
    case 'thread/add':
      return [action.payload.thread, ...threads];
    default:
      return threads;
  }
}

export default threadsReducer;
