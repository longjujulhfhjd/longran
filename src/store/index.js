import vue from 'vue'
import vuex from 'vuex'
import message from './message.js'
import server from './server.js'
vue.use(vuex)

export default new vuex.Store({
    modules: {
        message,
        server
    }
})
