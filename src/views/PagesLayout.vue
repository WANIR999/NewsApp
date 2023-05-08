<template>
    <div class="w-screen h-screen">
      <NavBar @setfavmode="setfavmode($event)"/>
      <CategoriesBar @SetCat="SetCat($event)" :cat="filter" :filtred="filtred"/>
      <div class="flex justify-between ">
       <SideBar :filter="filter" @SetCat="SetCat($event)" @setStatus="setStatus($event)" />
       <router-view :setStatus="setStatus"  :articles="articles" :filtredData="filtredData" :filtred="filtred" :filter="filter" :fav="fav" :favData="favData" />
       <SecondSide :status="status" :item="item" :filtred="filtred" :filter="filter"/>
      </div>
    </div>
    </template>
    
    <script>
    import SecondSide from '@/components/SecondSide.vue';
    import SideBar from '@/components/SideBar.vue';
    import CategoriesBar from '@/components/CategoriesBar.vue';
    import NavBar from '@/components/NavBar.vue';
    import Articles from '../api/Articles'
    
    export default {
      name: 'LayoutView',
      data(){
        return {
          status:'all',
          filter:'',
          articles:Articles.Articles,
          filtredData:null,
          filtred:false,
          item:{},
          fav:false,
          favData:[],
        }
      },
      methods:{
        SetCat(item){
          this.filter=item
          this.filtred=true
          this.fav=false
          this.filtredData=Articles.Articles.filter(e=>e.source.name==this.filter)
          console.log(this.filtredData)
        },
        setStatus(status,item){
          this.status=status
          this.item=item
        },
        setfavmode(){
          this.fav=true
         this.favData=this.$store.getters.favorites
        },
        setArtcls(data){
         this.articles=data
        //  console.log(this.articles)
        },
      },
      components: {
       SecondSide,SideBar,NavBar,CategoriesBar
      }
    }
    </script>
    