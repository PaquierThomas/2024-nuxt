<script setup>
const env = useRuntimeConfig();
const { client } = usePrismic();
const { data: home, error } = await useAsyncData("home", () =>
  client.getSingle("homepage")
);
const { data: recipes } = await useAsyncData("recipes", () => {
  return $fetch(env.public.apiUrl + "/recipes");
});
// Handle case when request fails
if (!home.value || error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "La page d'accueil est introuvable",
  });
}
</script>
<template>
  <div class="p-index">
    <!--    <h1>{{ home.data }}</h1>-->
    <Header />
    <Hero
      :title="home.data.hero_title"
      :text="home.data.hero_text"
      :buttons="home.data.hero_buttons"
    />
    <section class="container">
      <Information :information="home.data.information" />
      <MyTitleSection
        title="Services"
        subtitle="Why Choose Our Favorite Food"
      />
      <Services :services="home.data.services" />
      <div class="p-index__recipes">
        <div class="p-index__recipe" v-for="recipe in recipes">
          <RecipeCard
            v-bind="{
              id: recipe.recipe_id,
              title: recipe.recipe_name,
              imageSrc: recipe.image_url,
              imageAlt: recipe.recipe_name,
              description: recipe.recipe_description,
            }"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.p-index {
  &__recipes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 50px;
  }
}

.container {
  max-width: 1600px;
  margin: 30px auto;
}
</style>
