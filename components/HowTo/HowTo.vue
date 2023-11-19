<script setup>
const props = defineProps({
  tag: String,
  title: String,
  how_to: Array,
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
      <!-- <div v-for="(item, index) in how_to" :class="['c-how-to__item']">
        <HowToItem
          :title="item.how_to_title"
          :text="item.how_to_text"
          :image="item.how_to_image"
          :reversed="isOdd(index)"
        /> -->
      <div
        class="c-how-to__column"
        v-for="(item, index) in how_to"
        :key="index"
      >
        <div v-if="isOdd(index)" class="c-how-to__item-reversed">
          <HowToItem
            :title="item.how_to_title"
            :text="item.how_to_text"
            :reversed="isOdd(index)"
          />
        </div>
        <div v-else class="c-how-to__item">
          <HowToItem
            :title="item.how_to_title"
            :text="item.how_to_text"
            :reversed="isOdd(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-how-to {
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__column {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__item {
    flex: 1;
  }
  &__item-reversed {
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
  }
}
</style>
