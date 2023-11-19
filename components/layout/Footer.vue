<script setup></script>

<template>
  <div class="footer-row">
    <div class="col">
      <img src="/Logo.png" alt="Logo de 'FOOD'" class="logo" />
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero
        viverra dapibus odio sit malesuada in quis. Arcu tristique elementum
        viverra integer id.
      </p>
      <div class="col__socials">
        <a href="" class="social-link">
          <MyIconFood
            name="Facebook"
            size="small"
            background="tangerine"
            color="orange"
          />
        </a>
        <a href="" class="social-link">
          <MyIconFood name="Twitter" size="small" background="tangerine" />
        </a>
        <a href="" class="social-link">
          <MyIconFood name="Linkedin" size="small" background="tangerine" />
        </a>
        <a href="" class="social-link">
          <MyIconFood name="Instagram" size="small" background="tangerine" />
        </a>
      </div>
    </div>
    <div class="col">
      <h3>Opening Restaurant</h3>
      <div class="col__lien">
        <p>Sat-Wet: 09:00am-10:00PM</p>
        <p>Thursday: 09:00am-11:00PM</p>
        <p>Friday: 09:00am-8:00PM</p>
      </div>
    </div>
    <div class="col">
      <h3>User Link</h3>
      <div class="col__lien">
        <a href="#"><h4>About Us</h4></a>
        <a href="#"><h4>Contact Us</h4></a>
        <a href="#"><h4>Order Delivery</h4></a>
        <a href="#"><h4>Payment & Tax</h4></a>
        <a href="#"><h4>Terms of Services</h4></a>
      </div>
    </div>
    <div class="col">
      <h3>Contact Us</h3>
      <div class="col__lien">
        <p>1234 Country Club Ave</p>
        <p>NC 123456, London, UK</p>
        <p>+0123 456 7891</p>
      </div>
      <form>
        <input type="text" placeholder="Enter your email..." />
        <MyIconFood
          name="ChevronRight"
          size="small"
          background="orange"
          class="button"
        />
        <!-- <MyButton size="small" variant="rounded" :icon="true" class="button" /> -->
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  // margin-top: rem(150);
  // padding: ;
  font-family: $primary-font-family;
  background-color: #fafaff;
  padding: rem(70) rem(30);
}
.col {
  display: flex;
  flex-direction: column;
  max-width: rem(375);

  h3 {
    font-size: rem(26);
    font-weight: 700;
    color: $black;
  }
  &__socials {
    display: flex;
    flex-direction: row;
    gap: rem(10);
  }
  &__lien {
    display: flex;
    flex-direction: column;
    gap: rem(15);
  }

  a,
  p {
    font-size: rem(18);
    font-weight: 500;
    color: $gray;
  }
}

.col:first-child {
  gap: rem(20);
}
.col:not(:first-child) {
  gap: rem(65);
}
.logo {
  width: 180px;
}

form {
  display: flex;
  flex-direction: row;
  position: relative;
  // margin-top: rem(30);
  margin-top: -40px;
}

input {
  width: rem(450);
  height: rem(65);
  border-radius: rem(32.5);
  padding: 0 rem(40);
  box-shadow: $gray 0px 2px 8px 0px;
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

.button {
  color: white;
  position: absolute;
  height: rem(50);
  right: rem(15);
  top: rem(8);
  border: none;
  box-shadow: none;
}
</style>
