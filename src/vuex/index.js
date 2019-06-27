// 建：非单端app项目，使用vuex + localStorage的方式存储数据。（ps：vuex在页面刷新之后会丢失）
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // 相当于实例中的data
    state: {
        author: 'yeyi',
        age: 23
    },
    // 相当于实例中的computed
    getters: {
        message: (state, getters) => {
            return state.author + ' is ' + state.age + 'old'
        }
    },
    //用于变更state
    mutations: {
        oldChange(state, parameter) {
            state.age += 1
        }
    }
})