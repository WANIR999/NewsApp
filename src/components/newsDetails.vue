<template>
    <div class="bloc w-full  my-3 flex flex-col justify-around items-center rounded-xl">
        <Icon icon="mdi:user-circle-outline" color="#d3d6db" class="w-40 h-40"/>
        <h1 class="text-white text-xl">{{ author}}</h1>
      <div class="w-full h-1/2 flex items-center">
       <p class="text-center text-base px-2 ">
       {{ description }}
       </p>
      </div>
      <div class="w-full flex justify-around items-center py-2">
        <Icon icon="mdi:instagram" color="#d3d6db" width="30" />
        <Icon icon="ic:round-facebook" color="#d3d6db" width="30" />
        <Icon icon="ph:twitter-logo" color="#d3d6db" width="30" />
      </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
name: 'NewsDetails',
props: {
  item:Object
},
computed:{
    description(){
        return 'Description : '+this.item.description
    },
    author(){
        return 'Author : '+this.item.author
    }
},
components:
{
 Icon
}
}
</script>

<style>
.bloc{
    height: 800px;
}
p{
    color: #d3d6db;
}

</style>