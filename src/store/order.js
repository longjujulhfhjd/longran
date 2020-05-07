import axios from 'axios'
let state = {
    orderlist: [],
    orderfukuanlist: [],
    orderdaifahuolist: [],
    ordershouhuolist: [],
    allappraiselist: []
}
let mutations = {
    getorderList (state, message) {
        state.orderlist = message
    },
    getfukuanorderList (state, message) {
        state.orderfukuanlist = message
    },
    getshouhuoorderList (state, message) {
        state.ordershouhuolist = message
    },
    getdaifahuoorderList  (state, message) {
        state.orderdaifahuolist = message
    },
    // 获取所有评价过的商品
    getAllappraiseList  (state, message) {
        state.allappraiselist = message
    }
}
let actions = {
    // 根据用户id得到最后一个订单信息
    getorderlist (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/getorder'
        }).then(function (res) {
            console.log(res.data.data)
            aa.commit('getorderList', res.data.data)
        })
    },
    // 获取全部订单信息
    getallorderlist (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/getallorder'
        }).then(function (res) {
        })
    },
    // 得到用户未付款的订单
    getunpayorderlist (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/getunpayorder'
        }).then(function (res) {
            console.log(res.data.data)
            aa.commit('getorderList', res.data.data)
        })
    },
    // 获取未处理商品，等待发货
    getdaifahuoorderlist (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/fahuolist'
        }).then(function (res) {
            console.log(res.data.data)
            aa.commit('getorderList', res.data.data)
        })
    },
    // 获取处理商品，等待收货
    getshouhuoorderlist (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/shouhuolist'
        }).then(function (res) {
            console.log(res.data.data)
            aa.commit('getorderList', res.data.data)
        })
    },
    // 获取已收货的商品，准备评价
    getpingjiaorderlist (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/pingjialist'
        }).then(function (res) {
            console.log(res.data.data)
            aa.commit('getorderList', res.data.data)
        })
    },
    // 根据订单编号，查询订单
    orderget (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/orderget'
        }).then(function (res) {
            console.log(res.data.data)
            aa.commit('getorderList', res.data.data)
        })
    },
    // 获取退款的商品
    gettuikuanorderlist (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/tuikuanlist'
        }).then(function (res) {
            console.log(res.data.data)
            aa.commit('getorderList', res.data.data)
        })
    }
}

export default {
    state,
    mutations,
    actions
}
