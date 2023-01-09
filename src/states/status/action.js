function setSuccessStatusActionCreator(status) {
  return {
    type: 'successStatus/set',
    payload: {
      successStatus: status,
    },
  };
}

export { setSuccessStatusActionCreator };
