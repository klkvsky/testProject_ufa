<template>
  <div class="sortRow__item" tabindex="1" @blur="unfocused">
    <p>Сортировать по:</p>

    <div class="sortRow__item__menu" @click="toggleMenu">
      <div class="sortRow__item__menu__current">
        {{ this.$store.state.currentSorting }}

        <svg
          width="18"
          height="11"
          viewBox="0 0 18 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="{ active: menuToggle }"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.2929 0.292908L17.7071 1.70712L9.00001 10.4142L0.292908 1.70712L1.70712 0.292908L9.00001 7.5858L16.2929 0.292908Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="sortRow__item__menu__options" :class="{ active: menuToggle }">
        <span @click="changeSorting('Цена по возрастанию')">
          Цена по возрастанию
        </span>
        <span @click="changeSorting('Цена по убыванию')">
          Цена по убыванию
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuToggle: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuToggle = !this.menuToggle
    },
    changeSorting(type) {
      this.$store.commit('changeSorting', type)
    },
    unfocused() {
      this.menuToggle = false
    },
  },
}
</script>
