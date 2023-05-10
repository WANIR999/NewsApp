export default{
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
}