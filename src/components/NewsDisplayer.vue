<template>
    <div class="zone  my-2 mx-3 rounded-xl overflow-y-scroll">
        <div v-if="mode === 'all' && filtred==false">
            <NewCard @setitem="setitem($event)" v-for="item in news" :key="item.url" :title="item.title" :description="item.description"
             :author="item.author" :image="item.urlToImage" :date="setToLocalDate(item.publishedAt)" :content="item.content"/>
        </div>
        <div v-if="mode === 'all' && filtred==true">
            <h1 class="text-xl font-extrabold">{{title}}</h1>
            <NewCard @setitem="setitem($event)" v-for="item in filtredData" :key="item.url" :title="item.title" :description="item.description"
             :author="item.author" :image="item.urlToImage" :date="setToLocalDate(item.publishedAt)" :content="item.content"/>
        </div>
        <DetailsDisplayer v-if="mode == 'info'"
            :image="item.image" :title="item.title" :content="item.content" :setmode="setmode" />
    </div>
</template>

<script>
import NewCard from './NewCard.vue';
import DetailsDisplayer from '../components/DetailsDisplayer.vue'
export default {
    name: 'NewsDisplayer',
    props: {
        setStatus:Function,
        articles:Array,
        filtredData:Array,
        filtred:Boolean,
        filter:String,
    },
    data() {
        return {
            news: [],
            mode: 'all',
            item:{},
        }
    },
    methods: {
        setNews() {
            this.news = this.articles
            console.log(this.filtredData)
            console.log(this.filtred)
        },
        setToLocalDate(date) {
            return date.split('T')[0].toString()
        },
        setmode(mode,data) {
           this.mode=mode
           this.setStatus(mode,data)
        },

        setitem(data) {
            this.item=data
            this.setmode('info')
            this.setStatus('info',data)
        },
    },
    mounted() {
        this.setNews()
    },
    computed:{
       title(){
         return this.filtredData.length+' News from '+this.filter+`'s source`
       }
    },
    components: {
        NewCard, DetailsDisplayer
    }
}
</script>

<style>
.zone {
    width: 70%;
    height: 820px;
}

.zone::-webkit-scrollbar {
    display: none;
}
</style>