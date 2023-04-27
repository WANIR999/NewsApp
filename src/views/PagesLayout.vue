<template>
    <div class="w-screen h-screen">
      <NavBar/>
      <CategoriesBar :SetCat="SetCat"/>
      <div class="flex justify-between ">
       <SideBar/>
       <router-view/>
       <SecondSide/>
      </div>
    </div>
    </template>
    
    <script>
    import SecondSide from '@/components/SecondSide.vue';
    import SideBar from '@/components/SideBar.vue';
    import CategoriesBar from '@/components/CategoriesBar.vue';
    import NavBar from '@/components/NavBar.vue';
    
    export default {
      name: 'LayoutView',
      data(){
        return {
          Categorie:"",
        }
      },
      methods:{
        SetCat(item){
          this.Categorie=item
          console.log(this.Categorie)
        },
      },
      components: {
       SecondSide,SideBar,NavBar,CategoriesBar
      }
    }
    </script>
    