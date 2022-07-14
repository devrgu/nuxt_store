<template> </template>

<script>
    export default {
        data () {
            return {
            }
        },
        components: {
        }
    }
</script>

<style>
    .Loader-container{
        width: 100%;
        height:100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        overflow: hidden;
    }
    .cub-container{
        display: flex;
        justify-content:center;
        align-items: center;
        height: inherit;
        
        
    }
    .cub{
        width: 150px;
        height: 150px;
        border: 15px solid rgba(247, 101, 74, 1);
        border-radius: 50%;
        border-left-color:rgba(247, 101, 74, 0);;
        animation: loader 1.3s linear infinite;
    }
    @keyframes loader{
        25%{
            transform: rotate(140deg)
        }
        50%{
            transform: rotate(260deg)
        }
        75%{
            transform: rotate(340deg)
        }
        100%{
            transform: rotate(360deg)
        }
    }
    .anim-enter-from, .anim-enter-to {
  transition: opacity 1s;
    }
        
        .anim-leave-from,.anim-leave-active {
  opacity: 0;
}
</style>