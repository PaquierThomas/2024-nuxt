<script setup="">
const env = useRuntimeConfig();
const props = defineProps({
  title: Array,
  text: Array,
  buttons: Array,
});
const { data: recipes } = await useAsyncData("recipes", async () => {
  return $fetch(env.public.apiUrl + "/recipes");
});
// onMounted(async () => {
//   await getRecipes()
// })
</script>

<template>
  <section class="c-hero">
    <div class="c-hero__title"><PrismicRichText :field="title" /></div>
    <div class="c-hero__text"><PrismicRichText :field="text" /></div>
    <div class="c-hero__buttons">
      <div v-for="button in buttons">
        <MyButton
          class="c-hero__button -default"
          :variant="button.button_variant"
          :size="button.button_size"
          v-if="button.button_type === 'default'"
        >
          <PrismicLink :field="button.button_link">
            {{ button.button_label }}
          </PrismicLink>
        </MyButton>

        <MyButton
          v-else
          class="c-hero__button -video"
          :icon="true"
          :variant="button.button_variant"
          :size="button.button_size"
        >
          <PrismicLink :field="button.button_link">
            {{ button.button_label }}
          </PrismicLink>
        </MyButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.c-hero {
  &__title {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
    color: black;
    strong {
      color: orange;
    }
  }
  &__text {
    font-size: 18px;
    line-height: 1.1;
    color: black;
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
  &__buttons {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    &:not(:first-child) {
      margin-top: 2rem;
    }
  }
  &__button {
    &.-default {
      background-color: orange;
    }
  }
}
</style>
