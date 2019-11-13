export default (state = 'tab_1', action) => {
  switch (action.type) {
    case 'selected_tab':
      return action.payload;
    default:
      return state;
  }
};
