<script setup>
const route = useRoute();
</script>

<template>
  <div class="p-recipe-id">Voici la recette N°{{ route.params.id }}</div>
</template>

<style lang="scss" scoped></style>
