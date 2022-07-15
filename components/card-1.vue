<template>
       <div class="card-container">
                  <div class="card-content">
                   <div class="card-img glass-img-container">
                       <nuxt-link v-if="typeof placeholder.id !== 'undefined'" :to="{ name: 'cart-id', params:{id: placeholder.id}}">
                        <img :src="placeholder.src">
                        </nuxt-link>
                   </div>
                   <div class="card-text">
                      <div class="card-name">
                          <p>{{placeholder.name}}</p>
                      </div>
                      <div class="card-1-price">
                          <p>${{placeholder.price}}</p>
                      </div>
                      </div>
                      <div class="card-button">
                         <like></like>
                          <div class="add-to-card">
                              <a href="#"><span></span><p>ADD TO CART</p></a>
                          </div>
                      </div>
                </div>
                </div>
</template>

<script>
    import like from '~/components/subcomponents/like-subcomp.vue'
    export default {
        props:["placeholder"],
        data () {
            return {
            }
        },
        components: {
            like
        },
        computed:{
        }
    };
</script>

<style>
    .card-container{
        width: 270px;
        height: 370px;
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
        transition: 1s;
        
    }
    .card-content{
        height: inherit;
        position: relative;
    }
    .card-img{
        width: 100%;
        height: 170px;
        padding-top: 24px;
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card-img img{
        display: block;
    }
    .card-text{
        text-align: center;
        font-weight: 600;
    }
    .card-1-price{
        margin-top: 12px;
        
    }
    .card-button{
        display: flex;
        position:absolute;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%);
        bottom: 20px;
    }
    .add-to-card{
        background-color: #000000;
        
    }
    .add-to-card a{
        line-height: 38px;
        padding: 0 7px 0 10px;
    }
    .add-to-card a span{
        content: url(/cart-white.svg);
        vertical-align: middle;
        margin-right: 5px;
        
    }
    .add-to-card a p{
        color: #ffffff;
        font-weight: 200;
        font-size: 12px;
        display: inline-block;
        margin-bottom: 0;
    }
</style>