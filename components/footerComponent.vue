<template>
  <footer>
    <p>
      Тестовое задание для
      <a :href="linkToCompany" target="_blank">TAGES</a>. Спасибо за ваше
      внимание!
    </p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      linkToCompany: 'https://tages.ru',
    }
  },
}
</script>


<style scoped lang="scss">
footer {
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  p {
    font-weight: 400;
    color: #3f3f3f;
    text-align: center;

    a {
      font-weight: 600;
      color: #f65700;
      text-decoration: none;
    }
  }
}
</style>
