<template>
    <div class="scndcontainer my-3 mx-3 rounded-xl">
       <SiteInfo/>
    </div>
</template>

<script>
import SiteInfo from './SiteInfo.vue';
export default {
name: 'SecondSide',
props: {
    
},
components:{
    SiteInfo
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