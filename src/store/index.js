import vue from 'vue'
import vuex from 'vuex'
import message from './message.js'
vue.use(vuex)

export default new vuex.Store({
    modules: {
        message
    }
})
