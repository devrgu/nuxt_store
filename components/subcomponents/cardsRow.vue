<template>
  <div class="glasses-cards-1-container glasses-cards-container">
    <div class="glasses-cards-1-content glasses-cards-content">
      <div class="glasses-cards-1-title glasses-cards-title">
        {{ title.name }}
      </div>
      <card v-for="(row1, i) in filteredCards(title.name)" :key="i + 'A'" :placeholder="row1" />
    </div>
  </div>
</template>
<script>
import card from '~/components/card-1.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  props:["title"],
  data() {
    return {

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
  methods: {
    filteredCards(titleName) {
      if (titleName) {
        return this.cards.filter(product => product.class === titleName);
      }
      return [];
    }
  }

}
</script>