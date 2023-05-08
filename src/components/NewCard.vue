<template>
    <div class=" cursor-pointer w-full h-full border-b border-slate-300 flex justify-start items-center">
        <div  @click="setItem" class="card my-3 mx-3 rounded-xl">
            <img :src="image" class="w-full h-full rounded-xl">
        </div>
        <div class="datazone my-3 mx-3 rounded-xl">
            <div class=" w-full flex px-3 py-3">
                <h1 class="text-2xl text-start ">{{title}} :</h1>
                <div @click="remove(id)">
                    <Icon v-if="fav" class="ms-auto text-gray-400 hover:text-red-600" icon="material-symbols:delete-rounded"  width="30"/>
                </div>
            </div>
            <div  @click="setItem" class="  py-3">
                    <p class="text-start text-black  text-base  px-2 ">{{ description }}</p>
            </div>
            <div class="flex px-4 my-4 text-xs justify-between">
             <h3>{{ author }}</h3>
             <h4>{{ date }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
name: 'NewsCard',
props: {
    id:Number,
    image:String,
    title:String,
    date:String,
    author:String,
    item:Object,
    description:String, 
    content:String,  
    fav:Boolean, 
},
methods: {
 
    setItem(){
        this.$emit('setitem',{image:this.image, title:this.title , content:this.content, date:this.date, author:this.author , description:this.description})
    },
    remove(id){
    this.$store.commit('removeFav',id)
    window.localStorage.setItem('favorites',JSON.stringify(this.$store.state.favorites))
    },
},
components:{
    Icon
}
}
</script>

<style>
.card{
    width:180px;
    height: 180px;
}
.datazone{
    width:90%;
    height: 180px;
}
.hover{
    color:#F45050;
}


</style>