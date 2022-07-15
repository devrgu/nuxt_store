<template>
        <div class="glasses-container">
         <div class="glasses-content">
            <div class="glasses-cards-1-container glasses-cards-container">
              <div class="glasses-cards-1-content glasses-cards-content">
                 <div class="glasses-cards-1-title glasses-cards-title">
                 {{products.titles[0].name}}
                  </div>
                  <card v-for="(row1, i) in this.cardrows[0]" :key="i + 'A'" :placeholder="row1" />
              </div>
          </div>
          <div class="glasses-cards-2-container glasses-cards-container">
              <div class="glasses-cards-2-content glasses-cards-content">
                  <div class="glasses-cards-2-title glasses-cards-title">
                  {{products.titles[1].name}}
                  </div>
                  <card v-for="(row2, i) in this.cardrows[1]" :key="i + 'B'" :placeholder="row2" />
              </div>
         </div>
         <div class="glasses-cards-3-container glasses-cards-container">
              <div class="glasses-cards-3-content glasses-cards-content">
                  <div class="glasses-cards-3-title glasses-cards-title">
                      {{products.titles[2].name}}
                  </div>
                  <card v-for="(row3, i) in this.cardrows[2]" :key="i + 'C'" :placeholder="row3"/>
              </div>
         </div>
    </div>
    </div>
</template>

<script>
    import card from '~/components/card-1.vue'
     import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                cardrows:[],
            }
        },
        components: {
            card,
        },
        computed:{
            ...mapGetters({
                products: 'glasses/products'
            })
        },
        created(){
            var row = new Array();
            
            for(var i = 0; i < 3; i++) {
              row[i] = this.products.cards.filter(product => product.class == this.products.titles[i].name);
              this.cardrows[i] = row[i];
            }
            console.log(this.cardrows[1])
        }
    }
</script>

<style>
    .glasses-container{
        font-weight: 500;
        font-size: 16px;
        border-top: 1px solid #E1E1E1;
        padding-top: 25px;
        margin-top: 45px;
        width: 100%;
        
    }
    .glasses-content{
        
    }
    .glasses-cards-container{
        margin-bottom: 52px;
        padding-bottom: 26px;
        border-bottom: 3px solid #E1E1E1;
    }
    .glasses-cards-1-container{
        border-bottom: none;
    }
    .glasses-cards-title{
        font-weight: 600;
        font-size: 36px;
        margin-bottom: 25px;
        width: 100%;
        text-transform: uppercase;
    }
    .glasses-cards-content {
        display: flex;
        justify-content:space-between;
        flex-wrap: wrap;
        max-width: calc(1440px - 210px);
        margin: 0 auto;
    }
    .wdth100{
    }
</style>