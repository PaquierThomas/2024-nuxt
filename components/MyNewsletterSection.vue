<script setup></script>
<template>
  <section class="c__sectionEmail">
    <img src="/static/image/Burger.png" alt="Photo d'un Burger" />

    <div class="c__sectionEmail__content">
      <h3>Subcribe To Our Newsletter</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris
        sem sed urna venenatis vivamus. Egestas in velit nulla viverra turpis id
        ac. Amet faucibus tempus.
      </p>

      <form>
        <input type="text" placeholder="Type your Email..." />
        <MyButton size="small" class="c__sectionEmail__content__button"
          >Subscribe</MyButton
        >
      </form>
      <!-- <MyButton size="big" /> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c__sectionEmail {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
  // position: relative;
  padding: 70px 50px;
  width: 100%;
  height: 180px;
  border-radius: 50px;
  font-family: $primary-font-family;
  background-color: rgb(0, 0, 0);

  img {
    flex: none;
    width: 42%;
    // position: absolute;
    overflow: visible;
    padding-bottom: rem(30);
  }

  &__content {
    flex: none;
    color: white;
    max-width: 532px;

    h3 {
      font-size: rem(36);
      font-weight: 700;
    }
    p {
      font-size: rem(18);
      font-weight: 500;
    }
    // input {
    //   width: rem(450);
    //   height: rem(60);
    //   border-radius: rem(15);
    //   padding: 0 rem(40);
    //   border: none;
    //   box-shadow: none;
    // }
    // input::placeholder {
    //   font-family: $primary-font-family;
    //   font-weight: 500;
    //   color: $gray;
    //   font-size: rem(18);
    // }
    form {
      display: flex;
      flex-direction: row;
      position: relative;
      margin-top: rem(30);
    }

    input {
      width: rem(450);
      height: rem(65);
      border-radius: rem(15);
      padding: 0 rem(40);
      box-shadow: none;
      flex-grow: 2;

      border: none;
    }
    input::placeholder {
      font-family: $primary-font-family;
      font-weight: 500;
      color: $gray;
      font-size: rem(18);
    }

    input:focus {
      outline: none;
    }

    form:focus-within {
      outline: 1px solid $primary-color;
    }

    &__button {
      color: white;
      position: absolute;
      height: rem(50);
      right: rem(15);
      top: rem(8);
      border: none;
      box-shadow: none;
    }

    > * {
      margin: 15px 0;
    }
  }
}
</style>
