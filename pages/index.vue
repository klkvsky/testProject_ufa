<template>
  <main>
    <h1>Комплекты стеллажных систем</h1>
    <div class="sortRow">
      <priceSort />
      <materialSort />
    </div>
    <card />
  </main>
</template>

<script>
import priceSort from '~/components/priceSort.vue'
import materialSort from '~/components/materialSort.vue'
import card from '~/components/card.vue'

export default {
  layout: 'default',
  components: {
    priceSort,
    materialSort,
    card
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
    margin-top: 32px;
  }
}
</style>
