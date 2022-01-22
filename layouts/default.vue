<template>
  <div class="container">
    <breadcrumbs />
    <Nuxt />
    <!-- <footerComponent /> -->
  </div>
</template>

<script>
import breadcrumbs from '../components/breadcrumbs.vue'
import footerComponent from '../components/footerComponent.vue'

export default {
  components: {
    breadcrumbs,
    footerComponent
  },
}
</script>

<style scoped lang="scss">
.container{
    margin: 2rem 2%;
}
</style>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
