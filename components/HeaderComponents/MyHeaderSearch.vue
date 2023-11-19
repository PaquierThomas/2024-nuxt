import { MyIconFood } from '#build/components';
<script setup></script>

<template>
  <div class="c-header__search">
    <div class="c-header__search__input">
      <div class="c-header__search__input__icon">
        <MyIconFood name="Search" size="small" background="no-bg" />
        <input type="text" size="15" placeholder="Search" />
      </div>
    </div>

    <span class="c-header__search__splitter"></span>

    <div class="c-header__search__cart">
      <div class="panier__icon">
        <MyIconFood name="ShoppingBag" size="small" background="no-bg" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-header__search {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  gap: 10px;
  height: rem(65);
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba($gray, 50%);

  &__input__icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    gap: 10px;

    input {
      font-size: $regular-font-size;
      font-weight: $font_weight-bold;
      line-height: 1.25;
      border: none;
    }
  }

  &__splitter {
    height: 37px;
    width: 2px;
    background-color: $gray;
  }

  &__cart {
    margin: 25px 30px;
  }
}
</style>
