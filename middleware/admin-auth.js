export default function ({ store, route, redirect }) {
  // If auth is required and the user is logged in...
  if (store.getters['auth/loggedIn']) {
    // Validate the local user token...
    return store.dispatch('auth/validate').then((validUser) => {
      // Then continue if the token still represents a valid user,
      // otherwise redirect to login.
      validUser ? redirect() : redirectToLogin()
    })
  }

  // If auth is required and the user is NOT currently logged in,
  // redirect to login.
  redirectToLogin()
  function redirectToLogin() {
    redirect('/admin/account/login')
  }
}
  