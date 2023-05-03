<template>
    <div class="mx-auto h-14 catbar flex items-center shadow-slate-600 my-1 rounded-xl overflow-x-scroll scroll cursor-pointer">
       <div v-for="item in categories" :key="item.name" @click="setCate(item.name)" class="tag text-xs text-center flex items-center mx-2 rounded-xl hover:text-white">
       {{item.name}}
       </div>
    </div>
</template>


<script>
    import Categories from '../api/Categories'
    export default {
        name: 'CategoriesBar',

        props:{
          SetCat:Function,
          cat:String,
        },

        data(){
            return{
                categories:[],
            }
        },
        methods:{
        GetData(data){
            this.categories=data.Categories
            },
            setCate(cat){
              this.$emit('SetCat',cat)
            }
        },
        mounted(){
        this.GetData(Categories)
        }
        }
</script>


<style>
.catbar{

    background-color:#d3d6db65;
    box-shadow: #d3d6dbbe;
    width: 98%;
}
.tag{
    background-color: #455d7a49;
    width: auto;
    height: auto;
    padding: 6px 6px 6px 6px;
}
.scroll::-webkit-scrollbar {
    height: 5px;
    background-color: #3e4a6156;
  }

  .scrollbar::-webkit-scrollbar-button {
    border-radius: 50%;
    background: #0d0d0e;
  }

  

</style>