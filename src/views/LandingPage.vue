<template>
    <div class=" h-screen w-screen">
    <div class="softdarkbg w-full"></div>
    <GetStarted class="fixed top-0 left-0 right-0 bottom-0 z-0"/>
    </div>
  </template>
  
  <script>
  import GetStarted from '@/components/GetStarted.vue';
  export default {
    name: 'LandingPage',
    props: {
     
    },
    components:{
      GetStarted
    },
  }
  </script>

<style>
.softdarkbg {
 background-color:#233142;
 height: 60%;
}
</style>
  

  