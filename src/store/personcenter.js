import axios from 'axios'
let state = {
    userlist: [],
    addresslist: [],
    citydata: [],
    okaddressllist: []
}
let mutations = {
    getuserList (state, message) {
        state.userlist = message
    },
    getaddressList (state, message) {
        state.addresslist = message
    },
    // 改变详细地址的列表
    getokdetailaddlist (state, message) {
        state.okaddressllist = message
    }
}
let actions = {
    // 获取用户信息
    getuser (aa, data) {
        axios({
            method: 'get',
            params: data,
            url: 'http://127.0.0.1:3000/qtgetuser'
        }).then(function (res) {
            console.log(res)
            aa.commit('getuserList', res.data.data)
        })
    },
    // 获取地址信息
    getaddress (aa, id) {
        axios({
            method: 'get',
            params: {
                id
            },
            url: 'http://127.0.0.1:3000/getaddress'
        }).then(function (res) {
            console.log(res.data.data)
            aa.commit('getaddressList', res.data.data)
        })
    },
    // 根据id获取选择了的地址
    getokdetail (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/getokadddress'
        }).then(function (res) {
            window.localStorage.setItem('okaddresslist', JSON.stringify(res.data.data))
            aa.commit('getokdetailaddlist', res.data.data)
        })
    }
}

export default {
    state,
    mutations,
    actions
}
