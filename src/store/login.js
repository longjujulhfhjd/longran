// import axios from 'axios'
// let api = 'http://127.0.0.1:3000/'
let state = {
    info: '',
    token: ''
}
let mutations = {
    changeInfo (state, data) {
        console.log(data)
        state.info = data.info.email
        state.token = data.token
    }
}
let actions = {
}

export default {
    state,
    mutations,
    actions
}
