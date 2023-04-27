<template>

        <div class="container my-3 mx-3 flex flex-col justify-start items-center rounded-xl">
            <div class=" h-1/2 flex flex-col justify-around items-center mt-3">
                <router-link to="/" class="item flex items-center my-1"><Icon icon="material-symbols:home" color="#d3d6db" class="mx-1" width="30" />Home</router-link> 
                <router-link to="/" class="item flex items-center my-1"><Icon icon="fluent-mdl2:articles" class="mx-1" color="#d3d6db" />News</router-link> 
                <router-link to="/" class="item flex items-center my-1"><Icon icon="mdi:latest" class="mx-1" color="#d3d6db" width="30" />Latest</router-link> 
                <router-link to="/" class="item flex items-center my-1"><Icon icon="mdi:cards-heart" class="mx-1" color="#d3d6db" width="30" />Favorites</router-link> 
            </div>
        </div>
    
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
name: 'SideBar',
props: {

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


