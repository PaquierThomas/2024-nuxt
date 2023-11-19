<script setup>
import { computed } from "vue";

const props = defineProps({
  name: String,
  title: String,
  description: String,
  buttonLabel: String,
  style: String,
});

const className = computed(() => ({
  "-no-border": props.style === "no-border",
  "-no-shadow": props.style === "no-shadow",
  "-shadow": props.style === "shadow",
  "-border": props.style === "border",
}));
</script>
<template>
  <div class="card" :class="className">
    <div class="card__content">
      <MyIconFood :name="name" size="large" background="tangerine" />
      <PrismicRichText
        class="card__content__title"
        :field="title"
        size="small"
      />
      <PrismicRichText
        :field="description"
        class="card__content__description"
      />
      <!-- <div class="card__button">
        <MyButton variant="rounded" size="small">test</MyButton>
      </div> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  padding: 0;
  padding-top: rem(30);
  padding-bottom: rem(80);
  max-width: rem(470);
  max-height: rem(450);
  border-radius: rem(40);
  border: rem(1) solid $gray;
  overflow: hidden;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: $primary-font-family;
    padding: rem(40);
    margin-bottom: 0;
    text-align: center;
    gap: rem(20);
    > * + * {
      margin-top: rem(10);
    }
    &__title {
      font-size: rem(30);
      font-weight: 600;
    }
    &__description {
      font-size: rem(18);
      font-weight: 500;
      line-height: 1.4;
    }
  }
  &__button {
    text-align: center;
  }
  &.-no-border {
    border: none;
  }
  &.-no-shadow {
    box-shadow: none;
  }
  &.-shadow {
    box-shadow: 0 0 rem(5) 0 $gray;
    border: none;
  }
  &.-border {
    border: rem(1) solid $gray;
  }
}
</style>
