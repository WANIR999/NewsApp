export default{
    favItem(state,id){
        return state.favorites.filter(e=>e.id==id)
       },
       favorites(state){
     return state.favorites
       }
}