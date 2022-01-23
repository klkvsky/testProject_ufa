<template>
  <div class="container">
    <div class="container__child">
      <breadcrumbs />
      <Nuxt />
      <footerComponent />
    </div>
  </div>
</template>

<script>
import breadcrumbs from '../components/breadcrumbs.vue'
import footerComponent from '../components/footerComponent.vue'

export default {
  components: {
    breadcrumbs,
    footerComponent,
  },
}
</script>

<style scoped lang="scss">
.container {
  padding: 2rem 2.2%;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  overflow-x: hidden;

  &__child {
    display: flex;
    flex-direction: column;
    max-width: 1400px;
  }
}
</style>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  img {
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
}
</style>
