const state = {
    errors: []
};

const mutations = {
    SET_ERRORS: (state, errors) => {
        state.errors = errors;
    },
};

const actions = {
    setErrors({ commit }, errors) {
        return new Promise(resolve => {
            commit('SET_ERRORS', errors);
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
