<template>
    <div class="scndcontainer my-3 mx-3 rounded-xl">
       <SiteInfo v-if="status=='all'"/>
       <NewsDetails v-if="status=='info'" :item="item"/>
    </div>
</template>

<script>
import SiteInfo from './SiteInfo.vue';
import NewsDetails from './newsDetails.vue';
export default {
name: 'SecondSide',
props: {
    status:String,
    item:Object,
},
components:{
    SiteInfo,NewsDetails
}
}
</script>

<style>
.scndcontainer{
    width: 300px;
    height: 820px;
    background-color:#233142;
}

</style>