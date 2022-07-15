<template>
    <div class="card-like" id="likeC" @click="red()">
      <img class="like" v-show="graylike" src="/Vector.svg">
      <img class="red-like" v-show="!graylike" src="/Vector-red.svg">
    </div>
</template>

<script>
    export default {
        data () {
            return {
                graylike: true
            }
        },
        components: {
        },
        methods:{
            red (event){
            this.graylike = !this.graylike;
        }
        }
    }
</script>

<style>
    .card-like{
        display: inline-block;
        cursor: pointer;
    }
    .card-like img{
        padding: 10px;
        background-color: #E7E3E3;
        display: block;
    }
</style>