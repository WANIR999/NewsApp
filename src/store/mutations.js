export default{
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
         state.favorites=state.favorites.filter(e=>e.id!=id)
         console.log(state.favorites)
        },
}