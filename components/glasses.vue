<template>
  <div class="glasses-container">
    <div class="glasses-content">
      <h2 v-if="loading">LOADING...</h2>
      <CardsRow v-for="(title, i) in this.titles" :key="i + 'A'" :title="title"/>
    </div>
  </div>
</template>

<script>
import card from '~/components/card-1.vue'
import { mapGetters, mapActions } from 'vuex'
import CardsRow from './subcomponents/cardsRow.vue';

export default {
  data() {
    return {
      cardrows: [],
    }
  },
  components: {
    card,
  },
  computed: {
    ...mapGetters({
      cards: 'glasses/cards',
      titles: 'glasses/titles',
      loading: 'glasses/loading',
      error: 'glasses/error'
    })
  },
  async created() {
    await this.fetchCatalog();
  },
  methods: {
    ...mapActions({ fetchCatalog: 'glasses/fetchCatalog' }),

    
  }
}
</script>

<style>
.glasses-container {
  font-weight: 500;
  font-size: 16px;
  border-top: 1px solid #E1E1E1;
  padding-top: 25px;
  margin-top: 45px;
  width: 100%;

}

.glasses-content {}

.glasses-cards-container {
  margin-bottom: 52px;
  padding-bottom: 26px;
  border-bottom: 3px solid #E1E1E1;
}

.glasses-cards-1-container {
  border-bottom: none;
}

.glasses-cards-title {
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 25px;
  width: 100%;
  text-transform: uppercase;
}

.glasses-cards-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: calc(1440px - 210px);
  margin: 0 auto;
}

.wdth100 {}
</style>