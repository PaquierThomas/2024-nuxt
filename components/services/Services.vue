import { Services } from '#build/components'; import { MyCard } from
'#build/components';
<script setup>
const props = defineProps({
  services: Array,
});

const isOdd = (index) => {
  return index % 2 !== 0;
};
</script>

<template>
  <!-- <section class="c-information">
    <div v-for="(item, index) in information" class="c-information__item">
      <div class="c-information__iconFood">
        <MyIconFood :name="item.information_icon" :class="['-orange', '']" />
      </div>
      <div class="c-information__title">
        <PrismicRichText :field="item.information_title" />
      </div>
      <div class="c-information__text">
        <PrismicRichText :field="item.information_text" />
      </div>
    </div>
    <span
      v-if="index == information.length - 1"
      class="c-information__splitter"
    ></span>
  </section> -->

  <section class="c__services">
    <div class="c__services__list">
      <div v-for="item in services" :class="['c-services__item']">
        <MyCard
          class="c__services__card"
          :name="item.services_icon"
          :title="item.services_card_title"
          :description="item.services_card_description"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.c__services {
  margin: 20px 0;
  &__list {
    display: grid;
    justify-items: center;
    align-items: stretch;
    grid-template-rows: 1fr;

    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 50px;
  }
  &__card:hover {
    border: none;
    box-shadow: 0px 0px rem(100) 0px rgba($gray, 40%);
  }
}
</style>
