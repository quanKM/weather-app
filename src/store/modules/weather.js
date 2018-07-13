import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
    listCity: ['hanoi'],
    apiKey: '',
    apiUrl: 'https://api.openweathermap.org/data/2.5/',
}

// getters
const getters = {
    listCity: state => state.listCity
}

// actions
const actions = {
    addCity({
        commit,
        state
    }, city) {
        commit(types.ADD_LIST_CITY, city);
    }
}

// mutations
const mutations = {
    [types.ADD_LIST_CITY](state, value) {
        if (state.listCity.includes(value)) {
            return;
        } else {
            state.listCity.push(value);
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
