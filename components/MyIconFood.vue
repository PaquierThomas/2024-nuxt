<script setup>
import { computed } from "vue";

import ArrowLeft from "@/components/icons/ArrowLeft.vue";
import ArrowRight from "@/components/icons/ArrowRight.vue";
import ChevronRight from "@/components/icons/ChevronRight.vue";
import ShoppingBag from "@/components/icons/ShoppingBag.vue";
import Play from "@/components/icons/Play.vue";
import IconTooling from "@/components/icons/IconTooling.vue";
import Search from "@/components/icons/Search.vue";
import MapPin from "@/components/icons/MapPin.vue";
import Clock from "@/components/icons/Clock.vue";
import Phone from "@/components/icons/PhoneCall.vue";
import Star from "@/components/icons/Star.vue";
import Ustensil from "@/components/icons/Ustensil.vue";
import UstensilCrossed from "@/components/icons/UstensilCrossed.vue";
import Facebook from "@/components/icons/Facebook.vue";
import Instagram from "@/components/icons/Instagram.vue";
import Linkedin from "@/components/icons/Linkedin.vue";
import Twitter from "@/components/icons/Twitter.vue";
import Truck from "@/components/icons/Truck.vue";
import StarFilled from "@/components/icons/StarFilled.vue";

const props = defineProps({
  background: String,
  name: String,
  size: String,
  color: String,
});

const className = computed(() => ({
  " -orange": props.background === "orange",
  " -tangerine": props.background === "tangerine",
  " -black": props.background === "black",
  " -no-bg": props.background === "no-bg",
  " -tiny": props.size === "tiny",
  " -small": props.size === "small",
  " -medium": props.size === "medium",
  " -large": props.size === "large",
  " -Clr_Tangerine": props.color === "tangerine",
  " -Clr_White": props.color === "white",
  " -Clr_Black": props.color === "black",
  " -Clr_Orange": props.color === "orange",
  " -Clr_NoColor": props.color === "no-color",
}));

const getIcon = computed(() => {
  switch (props.name) {
    case "LeftArrow":
      return ArrowLeft;
    case "RightArrow":
      return ArrowRight;
    case "ChevronRight":
      return ChevronRight;
    case "ShoppingBag":
      return ShoppingBag;
    case "Play":
      return Play;
    case "Search":
      return Search;
    case "StarFilled":
      return StarFilled;
    case "MapPin":
      return MapPin;
    case "Clock":
      return Clock;
    case "Phone":
      return Phone;
    case "Star":
      return Star;
    case "ForkKnife":
      return Ustensil;
    case "ForkKnifeCrossed":
      return UstensilCrossed;
    case "Truck":
      return Truck;
    case "Facebook":
      return Facebook;
    case "Instagram":
      return Instagram;
    case "Linkedin":
      return Linkedin;
    case "Twitter":
      return Twitter;

    default:
      return IconTooling;
  }
});
</script>

<template>
  <i class="icon" :class="className">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  border-radius: 100%;
  background: $white;
  color: $black;
  box-shadow: 0 0 rem(5) 0 $gray;
  display: inline-flex;
  height: rem(50);
  width: rem(50);
  align-items: center;
  justify-content: center;
  svg {
    width: 60%;
  }

  &.-orange {
    background: $primary-color;
    color: $white;
    box-shadow: none;
  }
  &.-tangerine {
    background: $secondary-color;
    color: $primary-color;
    box-shadow: none;
  }

  &.-black {
    background: $black;
    color: $white;
  }
  &.-no-bg {
    background: none;
    box-shadow: none;
  }
  &.-tiny {
    height: rem(25);
    width: rem(25);
  }
  &.-small {
    height: rem(50);
    width: rem(50);
  }
  &.-medium {
    height: rem(70);
    width: rem(70);
  }
  &.-large {
    height: rem(98);
    width: rem(98);
  }
  &.-Clr_Tangerine {
    color: $secondary-color;
  }
  &.-Clr_White {
    color: $white;
  }
  &.-Clr_Black {
    color: $black;
  }
  &.-Clr_Orange {
    color: $primary-color;
  }
  &.-Clr_NoColor {
    color: none;
  }
}
</style>
