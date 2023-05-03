<template>
    <div @click="setItem" class=" cursor-pointer w-full h-full border-b border-slate-300 flex justify-start items-center">
        <div class="card my-3 mx-3 rounded-xl">
            <img :src="image" class="w-full h-full rounded-xl">
        </div>
        <div class="datazone my-3 mx-3 rounded-xl">
            <div class=" w-full flex px-3 py-3">
                <h1 class="text-2xl text-start ">{{title}} :</h1>
            </div>
            <div class="  py-3">
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
export default {
name: 'NewsCard',
props: {
    image:String,
    title:String,
    date:String,
    author:String,
    item:Object,
    description:String, 
    content:String,   
},
methods: {
 
    setItem(){
        this.$emit('setitem',{image:this.image, title:this.title , content:this.content, date:this.date, author:this.author , description:this.description})
    }
},
components:{
    
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


</style>