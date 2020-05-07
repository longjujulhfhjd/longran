import axios from 'axios'
let state = {
    newslist: [],
    newsdetaillist: [],
    qiangzhilist: [],
    qianghualist: [],
    qiangbulist: [],
    qiangyilist: []
}
let mutations = {
    getnewsList (state, message) {
        state.newslist = message
    },
    getnewsdetail (state, message) {
        state.newsdetaillist = message
    },
    getqiangyi (state, message) {
        state.qiangyilist = message
    },
    getqiangzhi (state, message) {
        state.qiangzhilist = message
    },
    getqiangbu (state, message) {
        state.qiangbulist = message
    },
    getqianghua (state, message) {
        state.qianghualist = message
    }
}
let actions = {
    // 得到新闻信息
    getnewsinfo (aa) {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:3000/getnews'
        }).then(function (res) {
            aa.commit('getnewsList', res.data.data)
        })
    },
    // 得到新闻信息详情
    newsdetail (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/getnewsdetail'
        }).then(function (res) {
            aa.commit('getnewsdetail', res.data.data)
        })
    },
    // 墙衣
    qiangyi (aa) {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:3000/qiangyi'
        }).then(function (res) {
            aa.commit('getqiangyi', res.data.data)
        })
    },
    // 墙布
    qiangbu (aa) {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:3000/qiangbu'
        }).then(function (res) {
            aa.commit('getqiangbu', res.data.data)
        })
    },
    // 墙画
    qianghua (aa) {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:3000/qianghua'
        }).then(function (res) {
            aa.commit('getqianghua', res.data.data)
        })
    },
    // 墙纸
    qiangzhi (aa) {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:3000/qiangzhi'
        }).then(function (res) {
            aa.commit('getqiangzhi', res.data.data)
        })
    }
}

export default {
    state,
    mutations,
    actions
}
