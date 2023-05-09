<template>
    <div class="zone  my-2 mx-3 rounded-xl overflow-y-scroll">
        <div v-if="mode === 'all' && filtred==false && fav==false">
            <NewCard @setitem="setitem($event)" v-for="item in news" :key="item.url" :title="item.title" :description="item.description"
             :author="item.author" :image="item.urlToImage" :date="setToLocalDate(item.publishedAt)" :content="item.content"/>
        </div>
        <div v-if="fav == true">
            <NewCard @setitem="setitem($event)" v-for="item in favData" :key="item.id" :title="item.title" :description="item.description" :id="parseInt(item.id)"
             :author="item.author" :image="item.image" :date="setToLocalDate(item.date)" :content="item.content" :fav="fav" />
        </div>
        <div v-if="mode === 'all' && filtred==true && fav==false">
            <h1 class="text-xl font-extrabold">{{title}}</h1>
            <NewCard @setitem="setitem($event)" v-for="item in filtredData" :key="item.url" :title="item.title" :description="item.description"
             :author="item.author" :image="item.urlToImage" :date="setToLocalDate(item.publishedAt)" :content="item.content" />
        </div>
        <DetailsDisplayer v-if="mode == 'info'" 
        :title="item.title" :image="item.image" @setfav="setfav($event)" :content="item.content" :setmode="setmode" />
    </div>
</template>

<script>
import NewCard from './NewCard.vue';
import DetailsDisplayer from '../components/DetailsDisplayer.vue'
export default {
    name: 'NewsDisplayer',
    props: {
        setStatus:Function,
        status:String,
        articles:Array,
        filtredData:Array,
        filtred:Boolean,
        filter:String,
        fav:Boolean,
        favData:Array,
    },
    data() {
        return {
            news: [],
            mode: 'all',
            item:{},
            favs:this.$store.state.favorites,
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
            console.log(this.favs)
        },
        setfav() {
            this.item.id=this.$store.state.id
            this.$store.dispatch('addFav',this.item)
            this.$store.dispatch('increment')
            window.localStorage.setItem('favorites',JSON.stringify(this.$store.state.favorites))
            window.localStorage.setItem('id',this.$store.state.id)
            console.log(this.$store.state.id)
        },
    },
    mounted() {
        this.setNews(),
        this.$store.dispatch('defineFavList',JSON.parse(window.localStorage.getItem('favorites')))
        this.$store.dispatch('defineId',window.localStorage.getItem('id'))
    },
    watch:{
    
    status:function(item){
        this.mode(item)
    }
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