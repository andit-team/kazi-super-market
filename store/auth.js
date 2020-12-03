import axios from 'axios'

export const state = () => ({
    _token : JSON.parse(localStorage.getItem('_token')),
    currentUser : JSON.parse(localStorage.getItem('_token')),
});

export const mutations = {
    SET_CURRENT_USER(state, data) {
        state.currentUser = data.user
        state._token = data.token
        saveState('AuthUser', data.user)
        saveState('_token', data.token)
    },
    CLEAR_CURRENT_USER(state, newValue) {
        state.currentUser = null
        state._token = null
        saveState('_token', null)
        saveState('AuthUser', null)
    },
}

export const getters = {
    // Whether the user is currently logged in.
    loggedIn(state) {
        return !!state._token
    },
}

export const actions = {
    // This is automatically run in `src/state/store.js` when the app
    init({ state, dispatch }) {
        dispatch('validate')
    },

    // Logs in the current user.
   async logIn({ commit, dispatch, getters }, { username, password } = {}) {
        // if (getters.loggedIn) return dispatch('validate')
        const response = await axios.post(process.env.API_URL+'/admin/login/',{username,password}).then((result) => {
            console.log(result.data.data);
            if(result.data.error === false){
                commit('SET_CURRENT_USER', result.data.data)
                dispatch('notification/success', "Login Success", { root: true });
                return result.data.data.token
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

    validate({ commit, state }) {
        if (!state.currentUser) return Promise.resolve(null)
        const data = {token:JSON.parse(localStorage.getItem('_token')),user:JSON.parse(localStorage.getItem('AuthUser'))};
        // commit('SET_CURRENT_USER', data)
        return data;
    },
}

// ===
// Private helpers
// ===

function saveState(key, state=null) {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(state))
    }
}
