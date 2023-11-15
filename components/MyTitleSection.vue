<script setup>
defineProps({
  title: String,
  subtitle: String,
});
</script>

<template>
  <div class="c__title">
    <h2>{{ title }}</h2>
    <h3>{{ subtitle }}</h3>
  </div>
</template>

<style lang="scss" scoped>
.c__title {
  display: flex;
  flex-direction: column;
  margin: rem(50) 0;

  font-family: $primary-font-family;
  text-align: center;
  line-height: 1.5;

  h2 {
    font-size: rem(15);
    font-weight: 400;
    color: $primary-color;
  }
  h3 {
    font-size: 2.25rem;
    font-weight: 700;
  }
}
</style>
