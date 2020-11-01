import { getFirebaseBackend } from '../helpers/firebase/authUtils'
import axios from 'axios'

export const state = () => ({
    currentUser: localStorage.getItem('authUser'),
});

export const mutations = {
    SET_CURRENT_USER(state, newValue) {
        state.currentUser = newValue
        saveState('authUser', newValue)
    },
    CLEAR_CURRENT_USER(state, newValue) {
        state.currentUser = null
        saveState('authUser', null)
    },
}

export const getters = {
    // Whether the user is currently logged in.
    loggedIn(state) {
        return !!state.currentUser
    },
}

export const actions = {
    // This is automatically run in `src/state/store.js` when the app
    // starts, along with any other actions named `init` in other modules.
    // eslint-disable-next-line no-unused-vars
    init({ state, dispatch }) {
        dispatch('validate')
    },

    // Logs in the current user.
   async logIn({ commit, dispatch, getters }, { username, password } = {}) {
        // if (getters.loggedIn) return dispatch('validate')
        const response = await axios.post(process.env.API_URL+'/admin/login/',{username,password}).then((result) => {
            if(result.data.error === false){
                commit('SET_CURRENT_USER', result.data.token)
                dispatch('notification/success', "Login Success", { root: true });
                return result.data.token
            }else{
                commit('CLEAR_CURRENT_USER');
                dispatch('notification/error', "Invalid Login Info", { root: true });
            }
        });
        return response
    },

    // Logs out the current user.
    logOut({ commit }) {
        commit('CLEAR_CURRENT_USER');
    },

    // register the user
    // register({ commit, dispatch, getters }, { email, password } = {}) {
    //     if (getters.loggedIn) return dispatch('validate')

    //     return getFirebaseBackend().registerUser(email, password).then((response) => {
    //         const user = response
    //         commit('SET_CURRENT_USER', user)
    //         return user
    //     });
    // },

    // reset pass the user
    // eslint-disable-next-line no-unused-vars
    // resetPassword({ commit, dispatch, getters }, { email } = {}) {
    //     if (getters.loggedIn) return dispatch('validate')

    //     return getFirebaseBackend().forgetPassword(email).then((response) => {
    //         const message = response.data
    //         return message
    //     });
    // },

    // Validates the current user's token and refreshes it
    // with new data from the API.
    // eslint-disable-next-line no-unused-vars
    validate({ commit, state }) {
        if (!state.currentUser) return Promise.resolve(null)
        const user = JSON.parse(localStorage.getItem('authUser'));//getFirebaseBackend().getAuthenticatedUser();
        commit('SET_CURRENT_USER', user)
        return user;
    },
}

// ===
// Private helpers
// ===

function saveState(key, state) {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(state))
    }
}
