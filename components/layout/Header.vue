<!-- <script setup>
import { useGlobalStore } from "@/stores/global";
const store = useGlobalStore();
</script>

<template>
  <header class="c-header">
    <div class="c-header__text">Le header</div>
    <div class="c-header__count">{{ store.cart }}</div>
  </header>
</template>

<style lang="scss" scoped>
.c-header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  font-size: 24px;
}
</style> -->

<script setup></script>

<template>
  <header class="c-header">
    <div class="c-header__content">
      <MyLogo class="c-header__content__logo" />
      <MyHeaderNavigation />
      <MyHeaderSearch />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.c-header {
  position: sticky;
  display: block;
  z-index: 100;
  top: 0;
  width: 100vw;
  margin-top: 15px;
  background: $white;

  &__content {
    max-width: 85vw;
    margin: auto;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
      display: block;
      width: 100px;
    }
  }
}
</style>
