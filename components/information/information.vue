<script setup>
const props = defineProps({
  information: Array,
});
</script>

<template>
  <section class="c-information">
    <div v-for="(item, index) in information" class="c-information__item">
      <!-- Matching prismic options / file names -->

      <div class="c-information__iconFood">
        <MyIconFood :name="item.information_icon" :class="['-orange', '']" />
      </div>
      <div class="c-information__title">
        <PrismicRichText :field="item.information_title" />
      </div>
      <div class="c-information__text">
        <PrismicRichText :field="item.information_text" />
      </div>
      <span
        v-if="index !== information.length - 1"
        class="c-information__splitter"
      />
    </div>
  </section>
</template>

<style lang="scss">
.c-information {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  // flex-flow: row wrap;
  width: 100%;
  // max-width: rem(1600);
  border-radius: 50px;
  box-shadow: 0px 0px 50px 0px rgba($gray, 20%);
  &__item {
    flex: 1;
    padding: rem(60);
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  &__iconFood {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  &__title {
    font-weight: 700;
    font-size: $regular-font-size;
    font-family: $primary-font-family;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
  &__text {
    font-family: $primary-font-family;
    font-size: rem(13);
    font-weight: $font_weight-regular;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
  &__splitter {
    flex: none;
    position: absolute;
    top: 40px;
    right: 0px;
    width: 1.5px;
    height: 160px;
    background: $gray;
  }
}
</style>
