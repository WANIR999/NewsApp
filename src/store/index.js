import Vue from 'vue'
import Vuex from 'vuex'

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
  mutations: {
    incId(state){
     state.id++
    },
    defineId(state,id){
     state.id=id
    },
    defineFavList(state,newItem,id){
     state.favorites= newItem
     state.id= id
    },
    addFav(state,newItem){
     state.favorites= [...state.favorites,newItem]
    },
    removeFav(state,id){
     state.favorites=state.favorites.filter(e=>e.id!==id)
    },
  },
  actions: {
  },
})
