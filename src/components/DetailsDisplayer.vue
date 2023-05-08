<template>
    <div class="w-full h-full rounded-xl">
        <ImageZone :image="image" :title="title" :content="content" @addFav="addFav($event)" @setmode="setmode($event)" />
    </div>
</template>

<script>
import ImageZone from './ImageZone.vue';

export default {
    name: 'DetailsDisplayer',
    props: {
        image: String,
        title: String,
        content: String,
        setmode:Function,
        setfav:Function,
    },
    methods: {
       addFav(){
         this.$emit('setfav')
       }
    },
    components: {
        ImageZone
    }
}
</script>

<style></style>