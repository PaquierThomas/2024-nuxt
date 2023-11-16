<script setup>
const liens = [
  ["Home", "#"],
  ["Menu", "#"],
  ["Service", "#"],
  ["Shop", "#"],
];
</script>

<template>
  <div class="c-header__menu">
    <nav class="c-header__nav">
      <ul class="c-header__liste">
        <li class="c-header__item" v-for="lien in liens" :key="lien">
          <a class="test" :href="lien[1]">{{ lien[0] }}</a>
        </li>

        <!-- <li class="c-header__item">
          <a href="#">Home</a>
        </li>
        <li class="c-header__item">
          <a href="#">Menu</a>
        </li>
        <li class="c-header__item">
          <a href="#">Service</a>
        </li>
        <li class="c-header__item">
          <a href="#">Shop</a>
        </li> -->
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.c-header__liste {
  font-size: rem(18);
  font-weight: 600;
  font-family: $primary-font-family;
  display: flex;
  align-self: center;
  justify-content: center;
  gap: 30%;

  &__item {
    list-style: none;
    padding: 0 10px;
    a {
      text-decoration: none;
      color: $black;
      &:hover {
        color: $primary-color;
      }
    }
  }
}

.test {
  text-decoration: none;
  color: $black;
  &:hover {
    color: $primary-color;
  }
}
</style>
