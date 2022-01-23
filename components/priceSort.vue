<template>
<!-- tabindex, @blur вызывают функцию unfocused для закрытия меню при клике вне компонента -->
  <div class="sortRow__item" tabindex="1" @blur="unfocused">
    <p>Сортировать по:</p>
    
    <!-- Вызываем функцию toggleMenu для открытия/закрытия меню-->
    <div class="sortRow__item__menu" @click="toggleMenu">
      <div class="sortRow__item__menu__current">
        <!-- Получаем данные о текующем методе сортировки из стора -->
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
      <!-- На клике по span'у вызываем функцию для коммита в стор для изменения текущего метода сортировки, с данными о выбранном методе сортировки -->
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
      menuToggle: false, // Обьект отвечающий за состояние меню (открытое / закрытое )
    }
  },
  methods: {
    // Метод переключающий состояние меню
    toggleMenu() {
      this.menuToggle = !this.menuToggle
    },
    // Метод вызывающий в сторе mutation для изменения типа сортировки
    changeSorting(type) {
      this.$store.commit('changeSorting', type)
    },
    // Метод закрывающий меню при клике вне компонента
    unfocused() {
      this.menuToggle = false
    },
  },
}
</script>
