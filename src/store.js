import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sex:'',
        hobbies:[],
        detail:''
    },
    mutations: {
        addsex(state,sex){
            state.sex=sex;
        },
        addhobbies(state,hobbies){
            state.hobbies=hobbies;
        },
        adddetail(state,detail){
            state.detail=detail;
        }
    },
    actions: {
    },
    modules: {
    }
})
