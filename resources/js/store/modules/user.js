import { login, register, logout, getInfo } from '@/api/auth';
import { getToken, setToken, removeToken } from '@/utils/auth';

const state = {
    token: getToken(),
    user: {}
};

const mutations = {
    SET_USER: (state, user) => {
        state.user = user;
    },
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
};

const actions = {
    login({ commit }, userInfo) {
        const { email, password } = userInfo;
        return new Promise((resolve, reject) => {
            login({email: email.trim(), password: password})
                .then(response => {
                    commit('SET_USER', response.user)

                    commit('SET_TOKEN', response.token);
                    setToken(response.token);

                    resolve(response);
                });
        });
    },

    register({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            register(userInfo)
                .then(response => {
                    resolve(response);
                }).catch(error => {
                reject(error);
            });
        });
    },

    // get user info
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token)
                .then(response => {
                    const { data } = response;

                    if (!data) {
                        reject('Verification failed, please Login again.');
                    }

                    // roles must be a non-empty array
                    if (!data.roles || data.roles.length <= 0) {
                        reject('getInfo: rol tanımlanmamış!');
                    }

                    commit('SET_USER', data);

                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            logout(state.token)
                .then(() => {
                    commit('SET_TOKEN', '');
                    commit('SET_USER', {});
                    removeToken();
                    // resetRouter();
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    // remove token
    resetUser({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '');
            commit('SET_USER', {});
            removeToken();
            resolve();
        });
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
