<template>
    <div class=" w-full h-full rounded-xl imgzone" v-bind:style="`backgroundImage: url(${image}` ">
            <div class="w-full h-full containr relative flex flex-col justify-end ">
                <div @click="getBack" class="w-12 h-12 rounded-full mx-2 my-2 flex justify-center items-center back absolute top-0 left-0 cursor-pointer">
                    <Icon icon="material-symbols:arrow-back" color="black" width="20" />
                </div>
                <div class=" cursor-pointer w-12 h-12 rounded-full mx-2 my-2 flex justify-center items-center back absolute top-0 right-0">
                    <Icon icon="mdi:cards-heart-outline" class="fav" width="30" />
                </div>
               
               <div class="w-full detailsZone h-1/2 ">
                <div>
                    <h1 class="text-2xl py-3 text-center ">{{title}} :</h1>
                </div>
                <div class="w-full contentZone overflow-y-scroll flex  justify-center mx-auto mt-6">
                    <p class=" par  text-black  text-2xl  ">{{ content }}</p>
                </div>
               
               </div>
            </div>
    </div>
</template>

<script>
import {Icon} from '@iconify/vue2'
export default {
name: 'ImageZone',
props: {
    image:String,
    title:String,
    content:String
},
methods:{
   
    getBack(){
        this.$emit('setmode','all',{})
    }
},
components:{
    Icon,
}
}
</script>

<style>
.imgzone{
    background-size:100%,100%;
    background-repeat:no-repeat;
}
.containr{
    background-color:rgba(0, 0, 0, 0.39);
}
.detailsZone{
   border-radius: 50px 50px 0px 0px;
   background-color: #fafafa;
}
.par{
    width: 80%;
    height: 300px;
    word-wrap: break-word;
}
.contentZone::-webkit-scrollbar {
    display: none;
  }
  .back{
    background-color: rgba(255, 255, 255, 0.473);
  }
  .fav{
    color:#c3195d;
  }
</style>