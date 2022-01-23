<template>
<!-- Статичный компонент пути страницы -->
  <div class="breadcrumbs">
    <p>Главная</p>
    <p>/</p>
    <p>Системы хранения</p>
    <p>/</p>
    <p class="active">Комплекты стеллажных систем</p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.breadcrumbs {
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #828282;

  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 32px;

  p{

    &.active{
      color: #333333;
    }
  }

  @media (max-width: 767.98px){
  	font-size: 2.5vw;
    gap: .5rem;
    margin-bottom: 8px;
    justify-content: center;
  }
}
</style>
