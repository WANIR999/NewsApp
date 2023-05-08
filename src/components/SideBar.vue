<template>

        <div class="container my-2 mx-3 flex flex-col justify-start items-center rounded-xl">
            <input  class="text-center mx-2 my-2 rounded-xl" type="text" placeholder="search" v-model="search">
            <div class=" h-1/2 flex flex-col justify-around items-center mt-3">
                <router-link to="/home" class="item flex items-center my-1 "><Icon icon="material-symbols:home" color="#d3d6db" class="mx-1" width="30" />Home</router-link> 
                <router-link to="/home" class="item flex items-center my-1"><Icon icon="fluent-mdl2:articles" class="mx-1" color="#d3d6db" />News</router-link> 
                <router-link to="/home" class="item flex items-center my-1"><Icon icon="mdi:latest" class="mx-1" color="#d3d6db" width="30" />Latest</router-link> 
            </div>
        </div>
    
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
name: 'SideBar',
props: {
filter:String
},
    data(){
    return{
        search:'',
    }
    },
    watch:{
    
        search:function(item){
            this.$emit('SetCat',item)
        }
    },
    computed:{
    
       favCount(){
        return this.$store.state.favorites.length+' Favorites'
       }
    },
components: {
		Icon,
	},

}
</script>

<style>
.container{
    width: 200px;
    height: 820px;
    background-color:#233142;
}
.item:hover{
    font-size: 20px;
    font-weight: bold;
    color: #93deff;
}
.item{
    color: #d3d6db;
}

</style>


