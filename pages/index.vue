<template>
  <main>
    <h1>Комплекты стеллажных систем</h1>
    <div class="sortRow">
      <!-- Компонент сортировки по цене-->
      <priceSort /> 
      <!-- Компонент фильтрации по материалам -->
      <materialSort />
    </div>
    <div class="cardRow">
      <!-- Компонент карточки, в который мы передаем в виде props профильтрованные данные из json файла, с ключом по id товара -->
      <card :item="item" v-for="item in sortFunc" :key="item.id" />
    </div>
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
    card,
  },
  computed: {
    // Функция для фильтрации товаров по материалам
    filterMaterial() {
      return this.$store.state.mainCatalog.filter((item) => {
        return item.material === parseInt(this.$store.state.currentMaterial.id)
      })
    },
    // Функция сортировки товаров по цене, получает отфильтрованный массив из  filterMaterial()
    sortFunc() {
      if (this.$store.state.currentSorting === 'Цена по возрастанию') {
        this.filterMaterial.sort((x, y) => {
          return (
            parseInt(x.price.current_price) > parseInt(y.price.current_price)
          )
        })
        return this.filterMaterial
      } else if (this.$store.state.currentSorting === 'Цена по убыванию') {
        this.filterMaterial.sort((x, y) => {
          return (
            parseInt(x.price.current_price) < parseInt(y.price.current_price)
          )
        })
        return this.filterMaterial
      }
    },
  },
  mounted() {
    // На загрузке вызываем коммит для проверки localStorage на сохранившиеся данные
    this.$store.commit('checkLocalStorage')
  },
}
</script>

<style lang="scss">
main {
  min-height: 100vh;
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
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }

  // Медиа query для средних мониторов
  @media (max-width: 1366px) {
    .cardRow {
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
    }
  }

  // Медиа query для маленьких мониторов и планшетов
  @media (max-width: 991.98px) {
    .cardRow {
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
    }
  }

  // Медиа query для телефонов
  @media (max-width: 767.98px) {
    h1 {
      font-size: 6vw;
      text-align: center;
      line-height: unset;
    }

    .sortRow {
      flex-direction: row;
      align-items: center;
      width: 100%;
      gap: 12px;
      margin-top: calc(25px - 0.5rem);
    }

    .cardRow {
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      gap: unset;
    }
  }

  // Медиа query для small телефонов
  @media (max-width: 413px) {
    .sortRow {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .cardRow {
      width: 100%;
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
      gap: unset;
    }
  }
}
</style>
