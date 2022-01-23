<template>
  <div class="sortRow__item">
    <p>Материал</p>

    <div class="sortRow__item__menu" @click="toggleMenu">
      <div class="sortRow__item__menu__current">
        {{this.$store.state.currentMaterial.name}}

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
        <span @click="changeMaterial(material)" v-for="material in materialList" :key="material.id">
          {{ material.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import materialList from '~/static/json/materials.json'

export default {
  data() {
    return {
      menuToggle: false,
      materialList,
    }
  },
  methods: {
    toggleMenu() {
      this.menuToggle = !this.menuToggle
    },
    changeMaterial(material){
      this.$store.commit("changeMaterial", material);
    }
  },
}
</script>

<style scoped lang="scss">
.sortRow__item {
  width: 288px;

  p {
    color: #4f4f4f;
    font-size: 12px;
    padding: 0.5rem 1rem;
  }

  &__menu {
    position: relative;

    &__current {
      height: 40px;
      padding: 0.5rem 1rem;
      background-color: #f2f2f2;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      font-weight: 400;
      font-size: 14px;
      cursor: pointer;
      transition: 0.1s all ease-in-out;

      svg {
        transition: 0.2s all ease-in-out;
        &.active {
          transform: rotate(180deg);
          transition: 0.2s all ease-in-out;
        }
      }

      &:hover {
        background-color: #dadada;
        transition: 0.15s all ease-in-out;
      }
    }

    &__options {
      width: 100%;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: #f2f2f2;

      transform: translateY(-40px);
      opacity: 0;
      z-index: -50;
      transition: 0.1s all ease-in-out;

      &.active {
        transform: translateY(0);
        opacity: 1;
        z-index: 10;
        transition: 0.2s transform ease-in-out, 0.2s opacity ease-in-out,
          0.001s z-index ease-in-out;
      }

      span {
        width: 100%;
        padding: 0.5rem 1rem;
        font-weight: 400;
        font-size: 14px;

        cursor: pointer;
        transition: 0.001s all ease-in-out;

        &:hover {
          background-color: #dadada;
          transition: 0.2s all ease-in-out;
        }

        &:last-child {
          padding-bottom: 0.8rem;
        }
      }
    }
  }
}
</style>
