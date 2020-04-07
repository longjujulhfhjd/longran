import axios from 'axios'
let state = {
    messagelist: []
}
let mutations = {
    getmessageList (state, message) {
        state.messagelist = message
    }
}
let actions = {
    getmessage (aa) {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:3000/getmessagelists'
        }).then(function (res) {
            console.log(res)
            console.log(11111)
            aa.commit('getmessageList', res.data.data)
        })
    }
}

export default {
    state,
    mutations,
    actions
}
