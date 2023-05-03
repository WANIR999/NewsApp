<template>
            <div class="h-screen w-full flex justify-around items-center box">
                <div class="bg-gray-600  firstcircle child rounded-full  "></div>
                <div class="bg-gray-600 child rounded-full secondcircle"></div>
                <div class="bg-gray-600 child rounded-full thirdcircle "></div>
                <router-link to="/home" class=" cursor-pointer rounded-full text-white w-52 h-16 text-xl bg-sky-300 py-4 mx-3">Browse news ></router-link>
            </div>
  </template>
  
  <script>
  export default {
    name: 'GetStarted',
    props: {
     
    }
  }
  </script>

<style>
.child{
    height: 500px;
    width: 500px;
    background-size: cover;
    background-repeat: no-repeat;
}
.box{
    margin-top: 93px;
}
.firstcircle{
    background-image: url('@/assets/images/connor-coyne-OgqWLzWRSaI-unsplash.jpg');
}
.secondcircle{
    background-image: url('@/assets/images/nasa-Q1p7bh3SHj8-unsplash.jpg');
}
.thirdcircle{
    background-image: url('@/assets/images/1200x768_le-nouveau-ministre-de-la-sante-francois-braun-est-arrive-a-l-elysee-ce-lundi-4-juillet-2022.webp');
}
</style>
  

  