<script setup>
import { computed } from "vue";

const listeProducts = computed(() => {
  return products.slice(0, 4);
});

const products = [
  {
    imgSrc: "/static/image/Burger.png",
    title: "Burger",
    prix: 5.15,
    description: "Mushroom Sauce",
  },
  {
    imgSrc: "/FoodCombo.png",
    title: "Food Combo",
    prix: 9.15,
    description: "Mushroom Sauce",
  },
  {
    imgSrc: "/Pizza.png",
    title: "Pizza",
    prix: 6.15,
    description: "Mushroom Sauce",
  },
  {
    imgSrc: "/Cake.png",
    title: "Cake",
    prix: 5.15,
    description: "Mushroom Sauce",
  },
];
</script>
<template>
  <section class="sectionHero">
    <div class="sectionHero__left">
      <div class="sectionHero__left-delivery">
        <p>Bike Delivery</p>
        <img src="/BikeDelivery.jpg" alt="illustration de livraison" />
      </div>

      <h1 class="sectionHero__left-title">
        The Fastest Delivery <br />
        In <span>Your City</span>
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed
        proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit sed
        tortor etiam volutpat ipsum.
      </p>

      <div class="sectionHero__left-buttons">
        <MyButton>Order now</MyButton>

        <div class="PlayButton">
          <MyIconFood
            name="Play"
            size="large"
            color="orange"
            background="no-bg"
            class="PlayButton__icon"
          />
          <p>Order Process</p>
        </div>
      </div>
    </div>

    <div class="sectionHero__right">
      <div class="sectionHero__right-bg" />

      <div class="sectionHero__right-grid">
        <MyCardHero
          v-for="product in listeProducts"
          :key="product.title"
          :imgSrc="product.imgSrc"
          :titre="product.title"
          :prix="product.prix"
          :description="product.description"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sectionHero {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: rem(50);

  padding: rem(30) rem(110);

  font-family: $primary-font-family;

  &__left {
    min-width: min-content;
    max-width: rem(630);
    width: 48%;

    p {
      font-size: rem(18);
      color: $black;
      font-weight: 500;
      line-height: 1.1;
    }

    &-delivery {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: rem(5);

      width: rem(270);
      padding: rem(5);
      border-radius: rem(30);

      background: #f5ddc4;

      img {
        aspect-ratio: 1/1;
        width: rem(50);
        object-fit: cover;
        border-radius: 50%;
      }

      p {
        color: $black;
        margin-left: rem(25);
        font-weight: 700;
        color: $primary-color;
        font-size: rem(18);
      }
    }

    &-title {
      margin-top: rem(65);
      margin-bottom: rem(50);

      font-size: rem(95);
      font-weight: 700;
      line-height: 1.15;

      span {
        color: $primary-color;
      }
    }

    &-buttons {
      margin-top: rem(100);
      display: flex;
      gap: rem(50);

      .PlayButton {
        flex: none;
        display: flex;
        align-items: center;
        gap: rem(25);

        &__icon {
          box-shadow: rgba(0, 0, 0, 0.24) 0 rem(3) rem(8);
        }

        p {
          font-weight: 700;
          font-size: rem(22);
        }
      }
    }
  }

  &__right {
    position: relative;
    min-width: rem(537);
    height: fit-content;
    padding: rem(50) rem(40) rem(60) 0;

    &-bg {
      position: absolute;
      top: 0;
      right: 0;

      width: 77%;
      height: 100%;
      border-radius: rem(30);

      background: linear-gradient(25deg, transparent, rgba($gray, 50%));
    }
    &-grid {
      display: grid;
      grid-template-columns: rem(300) rem(300);
      grid-column-gap: rem(50);
      grid-row-gap: rem(30);
    }
  }
}
</style>
