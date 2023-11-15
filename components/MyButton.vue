<script setup>
import { computed } from "vue";
import MyIconFood from "./MyIconFood.vue";

const props = defineProps({
  href: String,
  size: String,
  variant: String,
  icon: Boolean,
});

// Je garde ce commentaire car je le juge utile
/* J'ai corrigé cette partie après le cours avec une gestion des classes beaucoup plus simple. 
J'avais oublié qu'on pouvait mettre des objets dans le className */

const className = computed(() => ({
  " -rounded": props.variant === "rounded",
  " -small": props.size === "small",
}));
</script>
<template>
  <a v-if="href" :href="href" class="button" :class="className"
    ><slot></slot>
  </a>
  <button v-else class="button" :class="className">
    <slot></slot>
    <MyIconFood
      v-if="icon"
      name="ChevronRight"
      size="small"
      background="white"
    />
  </button>
</template>

<style lang="scss" scoped>
.button {
  background-color: $primary-color;
  background: linear-gradient(180deg, $secondary-color 0%, $primary-color 100%);
  border: none;
  border-radius: rem(15);
  box-shadow: 0px rem(4) rem(4) rgba(0, 0, 0, 0.25);
  display: inline-flex;
  gap: rem(20);
  align-items: center;
  justify-content: center;
  color: $white;
  font-family: $primary-font-family;
  font-size: $regular-font-size;
  font-weight: 600;
  padding: rem(33) rem(67);
  text-decoration: none;
  word-wrap: break-word;

  &.-rounded {
    background: $primary-color;
    border-radius: rem(37);
    font-weight: 500;
    padding: rem(26) rem(64);
  }

  &.-small {
    font-size: $small-font-size;
    padding: rem(14) rem(29);
    font-weight: 400;
  }
}
</style>
