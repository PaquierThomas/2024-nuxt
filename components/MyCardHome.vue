<script setup>
import MyIconFood from '../elements/MyIconFood.vue'

defineProps({
  name: String,
  imageAlt: String,
  imageSrc: String,
  title: String,
  description: String,
  price: Number,
  buttonLabel: String
})
</script>
<template>
  <div class="card" :class="className">
    <div class="card__image">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>
    <div class="card__content">
      <h2 size="small">{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="card__icon">
        <MyIconFood name="RightArrow" size="small" background="black" />
        <MyIconFood name="LeftArrow" size="small" background="white" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  * {
    margin: 0;
    padding: 0;
  }
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: rem(260);
  min-width: rem(250);
  max-height: rem(340);
  min-height: rem(320);
  background: $white;
  border: rem(1) solid $gray;
  gap: rem(20);
  border-radius: rem(35);
  box-shadow: 0 0 rem(5) 0 $gray;

  &__image {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: rem(-40);
    height: 50%;
    img {
      width: 90%;
    }
  }
  &__content {
    // display: flex;
    position: absolute;
    // justify-content: center;
    // flex-direction: column;

    // align-items: center;
    font-family: $primary-font-family;
    padding: 0 rem(40);
    text-align: center;
    left: 50%;
    top: 85%;
    transform: translate(-50%, -50%);
    > * + * {
      margin-top: rem(25);
    }
  }

  &__icon {
    display: flex;
    flex-direction: row;
    gap: rem(30);
    justify-content: center;
    align-items: center;
  }
}
</style>
