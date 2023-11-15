<script setup>
const props = defineProps({
  tag: String,
  title: String,
  items: Array,
  is_reversed: Number,
});

const isOdd = (index) => {
  return index % 2 !== 0;
};
</script>

<template>
  <section class="c-how-to">
    <span class="c-how-to__tag">{{ tag }}</span>
    <h2 class="c-how-to__title">{{ title }}</h2>
    <div class="c-how-to__list">
      <div v-for="(item, index) in items" :class="['c-how-to__item']">
        <!-- {{ items }} -->
        <HowToItem
          :title="item.how_to_title"
          :text="item.how_to_text"
          :image="item.how_to_image"
          :reversed="isOdd(index)"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-how-to {
  &__list {
    display: flex;
    flex-flow: row wrap;
  }
  &__item {
    flex: 1;
  }
}
</style>
