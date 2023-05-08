<template>
    <div class="w-full h-12 nav rounded flex justify-between">
      <img src="../assets/images/logotype.png" class="w-11 h-11 mx-2 ">
      <div @click="toFav" class=" cursor-pointer w-9 h-9 rounded-full mx-2 my-1 bg-white flex justify-center items-center">
        <h2>{{favNum}}</h2>
          <Icon icon="mdi:cards-heart-outline" class="fav" width="20" />
      </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
name: 'NavBar',
props: {

},
methods:{
   toFav(){
    this.$emit('setfavmode')
   }
},
computed:{
       favNum(){
         return this.$store.state.favorites.length
       }
    },
components:{
  Icon
}
}
</script>

<style>
.nav{

    background-color:#233142;
}

</style>