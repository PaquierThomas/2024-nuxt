import { HowToItem } from '#build/components'; import { HowToItem } from
'#build/components'; import { PrismicRichText } from '#build/components';
<script setup>
const props = defineProps({
  image: Object,
  title: Array,
  text: Array,
  items: Array,
  reversed: Boolean,
});

// useSeoMeta({
//   title: home.value.data.meta_title,
//   ogTitle: home.value.data.meta_title,
//   description: home.value.data.meta_description,
//   ogDescription: home.value.data.meta_description,
//   ogImage: home.value.data.meta_image,
// });
</script>

<template>
  <div :class="['c-how-to-item', { '-is-reversed': reversed }]">
    <div class="c-how-to-item__content">
      <PrismicRichText class="c-how-to-item__title" :field="title" />
      <PrismicRichText class="c-how-to-item__text" :field="text" />
    </div>
    <!-- <PrismicImage :image="image" class="c-how-to-item__image" /> -->
    <!-- {{ image }} -->
    <!-- <img :src="image.url" :alt="image.alt" class="c-how-to-item__image" /> -->
  </div>
</template>

<style lang="scss">
.c-how-to-item {
  $self: &;
  display: flex;
  flex-flow: column wrap;
  padding: 0 2rem;

  &.-is-reversed {
    flex-flow: column-reverse wrap;
  }
}
</style>
