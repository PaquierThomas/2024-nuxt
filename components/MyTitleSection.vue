---
import { PrismicRichText } from '#build/components';
---

<script setup>
defineProps({
  title: String,
  subtitle: String,
});
</script>

<template>
  <div class="c__title">
    <!-- {{ home.data }} -->
    <PrismicRichText class="c__title_h3" :field="subtitle" />
    <PrismicRichText class="c__title_h2" :field="title" />
  </div>
</template>

<style lang="scss" scoped>
.c__title {
  display: flex;
  flex-direction: column;
  margin: rem(130) 0 rem(50) 0;

  font-family: $primary-font-family;
  text-align: center;
  line-height: 1.5;

  &_h3 {
    font-size: rem(15);
    font-weight: 400;
    color: $primary-color;
  }
  &_h2 {
    font-size: 2.25rem;
    font-weight: 700;
  }
}
</style>
