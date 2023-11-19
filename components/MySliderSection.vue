<script></script>

<template>
  <section class="c_slidersection">
    <div class="c_slidersection__slider">
      <div class="fleche c_slidersection__slider__fleche_gauche">
        <MyIconFood name="LeftArrow" color="white" background="orange" />
      </div>
      <div class="fleche c_slidersection__slider__fleche_droite">
        <MyIconFood name="RightArrow" color="white" background="orange" />
      </div>
      <div class="c_slidersection__slider__info">
        <img src="/WilliansJhone.jpg" alt="photo d'un pdg" />

        <div>
          <h5>Willians Jhone</h5>
          <p>CEO & Co-Founder</p>
        </div>
      </div>
      <p class="c_slidersection__slider__info__description">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl
        tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed
        dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices
        nunc, dolor egestas mus.”
      </p>
    </div>
    <img
      class="c_slidersection__burger"
      src="/FritesBurgers.png"
      alt="Frites Burgers"
    />
  </section>
</template>

<style lang="scss" scoped>
.c_slidersection {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: rem(70);

  font-family: $primary-font-family;
  color: $black;

  &__slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    gap: rem(50);
    max-width: rem(703);
    max-height: rem(445);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: rem(100) rem(20);
    border-radius: rem(35);

    .fleche {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
    &__fleche_droite {
      right: rem(-25);
    }
    &__fleche_gauche {
      left: rem(-25);
    }

    &__info {
      display: flex;
      flex-direction: row;
      gap: rem(20);

      img {
        width: rem(80);
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: 100%;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: rem(5);
        max-width: rem(732);

        h5 {
          font-size: rem(18);
          font-weight: 600;
        }
        p {
          font-size: rem(13);
          font-weight: 400;
        }
      }
      &__description {
        font-size: rem(18);
        font-weight: 500;
        line-height: 1.5;
        padding: 0 rem(40);
        text-align: center;
      }
    }
  }
  &__burger {
    max-width: rem(750);
  }
}
</style>
