<template>
<div class="category-card">
    <div class="category-img">
      <img :src="placeholder.img">
    </div> 
    <div class="category-title">
      <p>{{placeholder.title}}</p>
    </div> 
</div>

</template>

<script scoped>
    export default {
        props:["placeholder"],
        data () {
            return {
            }
        },
        components: {
        }
    }
</script>

<style>
    .category-card{
        margin: 36px 53px 36px 53px;
        width: 563px;
        height: 208px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #FFFEFE;
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    }
    .category-img{
        margin-left: 12px;
        padding: 35px 0 35px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .category-title{
        width: 245px;
        font-weight: 500;
        font-size: 24px;
        text-align: center;
    }
</style>