<template>
  <main>
    <h1>Комплекты стеллажных систем</h1>
    <div class="sortRow">
      <priceSort />
      <materialSort />
    </div>
    <div class="cardRow">
      <card :item="item" v-for="item in catalog" :key="item.id"/>
    </div>
  </main>
</template>

<script>
import priceSort from '~/components/priceSort.vue'
import materialSort from '~/components/materialSort.vue'
import card from '~/components/card.vue'

import catalog from '~/static/json/items.json';

export default {
  layout: 'default',
  components: {
    priceSort,
    materialSort,
    card
  },
  data() {
    return {
      catalog
    }
  },
}
</script>

<style lang="scss">
main {
  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 48px;
    color: #000000;
  }

  .sortRow {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 24px;
    margin-top: calc(32px - .5rem);
  }

  .cardRow{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
