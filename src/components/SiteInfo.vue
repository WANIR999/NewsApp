<template>
    <div class="bloc w-full  my-3 flex flex-col justify-around items-center rounded-xl">
      <img src="../assets/images/logotype.png" class="w-40 h-40">
      <div class="w-full h-1/2 flex items-center">
       <p class="text-center text-xl px-2 ">
        This app brings you all the must-read articles from your favorite sources on the topics that matter most to you.
        To personalize the news, you can choose the posts you want to see and the topics you're interested in, such as Entertainment, Food, and Science.
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
name: 'SiteInfo',
props: {
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