import Vue from 'vue'
import Vuex from 'vuex'
import Mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites:[],
    id:0,
  },
  getters: {
    favItem(state,id){
     return state.favorites.filter(e=>e.id==id)
    },
    favorites(state){
  return state.favorites
    }
  },
  mutations: Mutations,
  actions: {
    increment (context) {
      context.commit('incId')
    },
    addFav(context,item) {
      context.commit('addFav',item)
    },
    defineFavList(context,item) {
      context.commit('defineFavList',item)
    },
    defineId(context,item) {
      context.commit('defineId',item)
    },
    removeFav(context,item) {
      context.commit('removeFav',item)
    },
  },
})
