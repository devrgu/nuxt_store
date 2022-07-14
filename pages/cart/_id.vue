<template>
     <main>
       <div class="card-page content">
        <div class="card-page-glasses-content">
            <div class="card-page-photos-container">
                <div class="card-page-photos-content">
                    <div class="card-page-img-container">
                        <div class="card-page-img-content">
                            <img :src='mainImg'>
                        </div>
                    </div>
                    <div class="card-page-choose-img-container">
                        <div class="card-page-choose-img-content">
                            <div class="card-page-choose-1-img card-page-choose" @click="mainImg = product.src"><img :src="product.srcmini"></div>
                            <div class="card-page-choose-2-img card-page-choose" @click="mainImg = product.src2" ><img :src="product.src2mini"></div>
                            <div class="card-page-choose-3-img card-page-choose" @click="mainImg = product.src3"><img :src="product.src3mini"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-page-text-container">
                <div class="card-page-portfolio-content">
                    <div class="card-page-title f36w400">{{product.name}}</div>
                    <div class="card-page-price f24w400">${{product.price}}</div>
                    <div class="card-page-buttons-container"><div class="card-page-count f24w400"><span @click="count++">+</span><p>{{count}}</p><span @click="count--">-</span></div>
                    <div class="card-page-icons">
                        <div class="card-page-like"><like /></div><div class="card-page-store"><store />
                    </div></div>
                </div>
            </div>
            <div class="card-page-description-container">
                <div class="card-page-decription-title-container f24w400"><p>Decription</p></div>
                    <div class="card-page-decription-subtext-container f13w400">
                        <p>Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious feel with<br> subtly curved lenses. Made with lightweight TR90 plastic, these large square sunglasses have a striking layered design.<br>The matte translucent front rim features a dark tortoiseshell overlay and dark tortoiseshell temple arms. A metal brow<br>bar adds a modern touch. Please note, the actual pattern on eyeglasses may vary slightly from the one pictured.</p>
                    </div>
                    <div class="card-page-category-container">
                        <div class="card-page-available f18w400">
                            <p>Available: Yes</p>
                        </div>
                        <div class="card-page-model f18w400">Model No: 1232231</div>
                    </div>
            </div>
        </div>
    </div>
        <div class="card-page-MoreInfo-container">
              <div class="card-page-MoreInfo-title f24w400">
                  <p>More Info</p>
              </div>
               <div class="card-page-MoreInfo-content">
                <div class="card-page-specifications-container card-page-MoreInfo-elem-container">
                   <div class="card-page-specifications-title card-page-MoreInfo-elem-title  f18w400">
                       <p>SPECIFICATIONS</p>
                   </div>
                   <div class="card-page-specifications-content card-page-MoreInfo-elem-content">
                       <ul>
                        <li>PD Range: 55-75</li>
                        <li>Prescription Range: -6.00 ~ +2.00</li>
                        <li>Available as</li>
                        <li>Progressive / Bifocal : No </li>
                        <li>Readers: No</li>
                    </ul>
                    <ul>
                        <li>Rim: Full Rim</li>
                        <li>Shape: Square</li>
                        <li>Material: TR</li>
                        <li>Progressive / Bifocal : No </li>
                        <li>Feature: Custom engraving , Lightweight</li>
                    </ul>
                   </div>
                </div>
                <div class="card-page-frame-size-container card-page-MoreInfo-elem-container">
                   <div class="card-page-frame-size-title card-page-MoreInfo-elem-title f18w400">
                       <p>FRAME SIZE</p>
                   </div>
                   <div class="card-page-frame-size-content card-page-MoreInfo-elem-content">
                       <ul>
                        <li>Frame Width: 146 mm</li>
                        <li>Lens Width: 52 </li>
                        <li>Bridge: 20 mm</li>
                    </ul>
                    <ul>
                        <li>Temple Length: 142 mm</li>
                        <li>Lens Height: 46 mm</li>
                        <li>Frame Weight: 17 grams</li>
                    </ul>
                   </div>
                </div>
            </div>
    </div>
    </div>
    </main>
</template>

<script>
    import like from '~/components/subcomponents/like-subcomp.vue'
    import store from '~/components/subcomponents/store-subcomp.vue'
    import { mapGetters } from 'vuex'
    export default {
        middleware: 'authware',
        data () {
            return {
                product: null,
                count: 1,
                mainImg: null
            }
        },
        components: {
            like,
            store
        },
        computed:{
            ...mapGetters({
                products: 'glasses/products'
            })
        },
        created(){
          const product = this.products.cards.find(product => product.id == this.$route.params.id);
            this.product = product
            this.mainImg = product.src
            console.log(product);
            },
        mounted(){
        }
        }
</script>

<style scoped>
    main{
        margin-top:42px;
    }
    nav{
        border-bottom: 2px solid #E5E5E5
    }
    .card-page-glasses-content{
        display: flex;
    }
    .card-page-photos-container{
        width: 300px;
        margin-right: 60px;
    }
    .card-page-img-container{
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 15px;
    }
    .card-page-choose-img-container{
        display: flex;
        justify-content: center;
    }
    .card-page-choose-img-content{
        display: flex;
        width: 210px;
        justify-content: space-between;
    }
    .card-page-choose{
        width: 57px;
        height: 57px;
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .card-page-title{
        margin-bottom: 3px;
    }
    .f18w400{
        font-size: 18px;
        font-weight: 400;
    }
    .f24w400{
        font-size: 24px;
        font-weight: 400;
    }
    .f36w400{
        font-size: 36px;
        font-weight: 400;
    }
    .f13w400{
        font-size: 13px;
        font-weight: 400;
    }
    .card-page-count{
        margin-right: 65px;
    }
    .card-page-count span{
        font-size: 24px;
        cursor: pointer;
        -ms-user-select: none; 
		-moz-user-select: none; 
		-webkit-user-select: none; 
		user-select: none; 
    }
    .card-page-count p{
        display: inline-block;
        padding: 0 19px 5px 19px;
        margin-bottom: 25px;
    }
    .card-page-icons{
        display: flex;
    }
    .card-page-buttons-container{
        display: flex;
        margin-top: 42px;
    }
    .card-page-decription-title-container{
        margin-bottom: 18px;
    }
    .card-page-decription-subtext-container{
        margin-bottom: 20px;
    }
    .card-page-category-container{
        display: flex;
        width: 336px;
        justify-content: space-between;
    }
    .card-page-specifications-content{
        width: 565px;
        margin-right: 50px;
    }
    .card-page-frame-size-content{
        min-width: 372px;
    }
    .card-page-MoreInfo-elem-content ul li{
        font-size: 14px;
        font-weight: 400;
    }
    .card-page-MoreInfo-elem-title{
        margin-bottom: 15px;
    }
    .card-page-MoreInfo-elem-content{
        display: flex;
        justify-content: space-between;
    }
    .card-page-MoreInfo-title{
        margin-bottom: 10px;
    }
    .card-page-MoreInfo-container{
        margin: 36px 0 62px 0;
    }
    .card-page-MoreInfo-content{
        display: flex;
    }
</style>