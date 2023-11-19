<script setup>
const props = defineProps({
  titre: String,
  imgSrc: String,
  prix: Number,
  description: String,
});
</script>

<template>
  <div class="card">
    <div class="card__bg">
      <div class="card__content">
        <img :src="imgSrc" :alt="'Photo de ' + imgSrc" />
        <div class="placement">
          <h4 class="card__content__titre">{{ titre }}</h4>
          <p class="card__content__description">
            {{ description }}
          </p>
          <div class="card__content__prix">
            <span>$</span>
            <p class="card__content__prix">{{ prix }}</p>
          </div>
        </div>
      </div>

      <div class="card__bg__buttons">
        <MyIconFood name="RightArrow" size="medium" background="black" />
        <MyIconFood name="LeftArrow" size="medium" background="white" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  max-width: rem(300);
  min-width: rem(200);
  aspect-ratio: 2/3;
  z-index: 0;

  &__bg {
    position: absolute;
    z-index: 0;
    bottom: 0;
    width: 100%;
    height: 80%;
    background: white;
    border-radius: rem(30);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    .card__content {
      position: relative;

      text-align: center;
      margin: 15% auto;
      display: flex;
      flex-direction: column;
      gap: rem(10);
      z-index: 10;
      font-family: $primary-font-family;

      img {
        width: 90%;
        margin: 15% auto;
        object-fit: contain;

        position: absolute;
        left: rem(15);
        bottom: rem(-128);
        z-index: 15;
      }
      .placement {
        position: absolute;
        top: rem(127);
        left: 22%;

        display: flex;
        flex-direction: column;
      }

      .card__content__titre {
        font-weight: 800;
        font-size: rem(26);
      }
      .card__content__description {
        font-weight: 500;
        font-size: rem(18);

        padding: rem(25) 0 rem(15) 0;
      }
      .card__content__prix {
        display: flex;
        flex-direction: row;
        gap: rem(5);
        justify-content: center;

        span {
          color: #d92f26;
          font-weight: 800;
        }
        p {
          font-weight: 700;
          font-size: rem(18);
        }
      }
    }
    .card__bg__buttons {
      display: flex;
      flex-direction: row;
      gap: rem(40);
      position: absolute;
      bottom: rem(-60);
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
