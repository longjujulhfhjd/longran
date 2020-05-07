import axios from 'axios'
let state = {
    classlist: [],
    classtwolist: [],
    goodsdetaillist: [],
    cartlist: [],
    cartslist: [],
    collectlist: [],
    searchlist: [],
    goodslist: []
}
let mutations = {
    getclasslist (state, message) {
        state.classlist = message
    },
    getclasstwolist (state, message) {
        state.classtwolist = message
    },
    getgoodsdetaillist (state, message) {
        state.goodsdetaillist = message
    },
    getcartlist (state, message) {
        state.cartlist = message
    },
    getcarstlist (state, message) {
        state.cartslist = message
    },
    getcollectlist (state, message) {
        state.collectlist = message
    },
    getgoodslists (state, message) {
        state.goodslist = message
    }
}
let actions = {
    // // 获取搜索的商品信息
    // getsearchlists (aa) {
    //     axios({
    //         method: 'get',
    //         url: 'http://127.0.0.1:3000/getsearch'
    //     }).then(function (res) {
    //         aa.commit('getgoodslist', res.data.data)
    //     })
    // },
    // 获取一级分类信息
    getclasslists (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/getclassone'
        }).then(function (res) {
            aa.commit('getclasslist', res.data.data)
        })
    },
    // 获取二级分类
    getclasslisttwo (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/getclasstwo'
        }).then(function (res) {
            aa.commit('getclasstwolist', res.data.data)
        })
    },
    // 获取种类的全部商品信息
    getclassgoodslist (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/getclassgoods'
        }).then(function (res) {
            aa.commit('getclasstwolist', res.data.data)
        })
    },
    // 根据id获取商品详情
    getgoodsdetail (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/getgoodsdetail'
        }).then(function (res) {
            aa.commit('getgoodsdetaillist', res.data.data)
            window.localStorage.setItem('goodslist', JSON.stringify(res.data.data))
        })
    },
    // 根据用户id获取购物车列表
    getcartlist (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/getcart'
        }).then(function (res) {
            aa.commit('getcartlist', res.data.data)
        })
    },
    // 删除购物车里的东西
    deletecartgoods  (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/deletcartgoods'
        }).then(function (res) {
            aa.commit('getcarstlist', res.data.data)
        })
    },
    // 根据客户id获取收藏夹商品
    getcollect (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/getcollect'
        }).then(function (res) {
            aa.commit('getcollectlist', res.data.data)
        })
    },
    // 根据商品id去删除收藏夹里的商品
    deletecollectgoods  (aa, id) {
        axios({
            params: {
                id: id
            },
            method: 'get',
            url: 'http://127.0.0.1:3000/deletcollectgoods'
        }).then(function (res) {
        })
    },
    // 获取商品的所有信息
    getgoodslist (aa) {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:3000/getgoodslist'
        }).then(function (res) {
            aa.commit('getgoodslists', res.data.data)
        })
    }
}

export default {
    state,
    mutations,
    actions
}
