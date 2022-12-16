export default ({ store, next }) => {
  // check if user loggedIn
  if (!store.state.S_userLoggedIn) {
    next("/login");
    return false;
  }
};
