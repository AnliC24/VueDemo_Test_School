import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    loginAdmin:[],
    queryStudent:[]
 }

 export default new Vuex.Store({//创建vuex中的store对象
    state
})