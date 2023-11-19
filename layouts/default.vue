<template>
  <main class="layout">
    <header class="layout__header">
      <slot name="header"></slot>
    </header>

    <aside class="layout__aside">
      <slot name="header"></slot>
    </aside>
    <article class="layout__article">
      <NuxtPage />
    </article>

    <footer class="layout__footer">
      <slot name="footer"></slot>
    </footer>
  </main>
</template>
<script></script>
<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template: "header" "article" "aside" "f ooter";

  @include medium-up {
    grid-template:
      "header header header"
      "aside article article"
      "footer footer footer";
  }
  > * {
    padding: rem(16);
  }
  &__aside {
    background: rebeccapurple;
    grid-area: aside;
  }
  &__article {
    background: orange;
    grid-area: article;
  }
  &__footer {
    grid-area: footer;
    background: blue;
  }

  &__header {
    background: red;
    grid-area: header;
  }
}
</style>
