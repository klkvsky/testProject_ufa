<template>
  <main>
    <h1>Комплекты стеллажных систем</h1>
    <div class="sortRow">
      <priceSort />
      <materialSort />
    </div>
    <div class="cardRow">
      <card :item="item" v-for="item in sortFunc" :key="item.id" />
    </div>
  </main>
</template>

<script>
import priceSort from '~/components/priceSort.vue'
import materialSort from '~/components/materialSort.vue'
import card from '~/components/card.vue'

import catalog from '~/static/json/items.json'

import { mapGetters } from 'vuex'

export default {
  layout: 'default',
  components: {
    priceSort,
    materialSort,
    card,
  },
  data() {
    return {
      catalog,
    }
  },
  // computed: mapGetters(["getCatalog"]),
  computed: {
    filterMaterial() {
      return this.catalog.filter((item) => {
        return item.material === parseInt(this.$store.state.currentMaterial.id)
      })
    },
    sortFunc() {
      if (this.$store.state.currentSorting === 'Цена по возрастанию') {
        this.filterMaterial.sort((x, y) => {
          return parseInt(x.price.current_price) > parseInt(y.price.current_price)
        })
        return this.filterMaterial
      } else if (this.$store.state.currentSorting === 'Цена по убыванию') {
        this.filterMaterial.sort((x, y) => {
          return parseInt(x.price.current_price) < parseInt(y.price.current_price)
        })
        return this.filterMaterial
      } else {
        // return this.filterMaterial
      }
    },
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
    margin-top: calc(32px - 0.5rem);
  }

  .cardRow {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
