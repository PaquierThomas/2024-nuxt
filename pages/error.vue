<script setup>
const props = defineProps({ error: Object });
</script>

<template>
  <div class="p-error">
    page d'erreur personnalisée
    {{ error }}
  </div>
</template>

<style lang="scss"></style>
