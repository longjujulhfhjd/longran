import vue from 'vue'
import vuex from 'vuex'
import message from './message.js'
import server from './server.js'
import shouye from './shouye.js'
import personcenter from './personcenter.js'
import wall from './wall.js'
import order from './order.js'
vue.use(vuex)

export default new vuex.Store({
    modules: {
        message,
        server,
        shouye,
        wall,
        order,
        personcenter
    }
})
