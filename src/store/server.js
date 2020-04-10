import axios from 'axios'
let state = {
    serverlist: []
}
let mutations = {
    getserverList (state, serverinfo) {
        state.serverlist = serverinfo
    }
}
let actions = {
    getserver (aa) {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:3000/getserver'
        }).then(function (res) {
            console.log(res)
            aa.commit('getserverList', res.data.data)
        })
    }
}

export default {
    state,
    mutations,
    actions
}
