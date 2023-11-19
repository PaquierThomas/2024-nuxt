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

// Variable pour suivre le nombre de pages affichées
const pageCounter = ref(1);

// Tableau de produits à afficher
const products = ref([
  {
    image_url: "/GyroSandwhic.jpg",
    recipe_name: "Photo de Gyro Sandwitch",
    recipe_name: "Gyro Sandwhich",
  },
  {
    image_url: "/Enchilade.jpg",
    recipe_name: "Photo de Enchilade",
    recipe_name: "Enchilade",
  },
  {
    image_url: "/GreenBeans.jpg",
    recipe_name: "Photo de Green Beans",
    recipe_name: "Green Beans",
  },
  {
    image_url: "/riz-cantonais.jpg",
    recipe_name: "Photo de riz-cantonais",
    recipe_name: "riz-cantonais",
  },
  {
    image_url: "/ChickenPotPie.jpg",
    recipe_name: "Photo de Chicken Pot Pie",
    recipe_name: "Chicken Pot Pie",
  },
  {
    image_url: "/GreenSalad.jpg",
    recipe_name: "Photo de Green Salad",
    recipe_name: "Green Salad",
  },
  {
    image_url: "/GreenSalad.jpg",
    recipe_name: "Photo de Green Salad",
    recipe_name: "Green Salad",
  },
  {
    image_url: "/GreenSalad.jpg",
    recipe_name: "Photo de Green Salad",
    recipe_name: "Green Salad",
  },
]);
// Fonction pour charger plus de cartes de produits
const loadMoreCards = () => {
  const cardsPerPage = 3;
  const startIndex = pageCounter.value * cardsPerPage;
  const newProducts = products.value
    .slice(startIndex, startIndex + cardsPerPage)
    .filter((newProduct) => {
      // Filtrer les nouvelles recettes pour exclure celles déjà présentes
      return !products.value.some(
        (existingProduct) =>
          existingProduct.image_url === newProduct.image_url &&
          existingProduct.recipe_name === newProduct.recipe_name
      );
    });
  products.value = [...products.value, ...newProducts];
  pageCounter.value++;
};

const displayedProducts = computed(() => {
  const cardsPerPage = 3;
  const startIndex = (pageCounter.value - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  return products.value.slice(0, endIndex);
});

// Déterminer s'il reste encore des produits à afficher
const hasMoreProducts = computed(() => {
  const cardsPerPage = 3;
  const startIndex = pageCounter.value * cardsPerPage;
  return startIndex < products.value.length;
});
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
      <!-- <MySliderSection /> -->
      <Information :information="home.data.information" />
      <MyTitleSection title="Product" subtitle="Most Popular Items" />
      <div class="p-index__recipes">
        <!-- Carte appellée dynamiquement depuis l'api mais ne fonctionne pas si l'api n'est pas lancée -->
        <!-- <div class="p-index__recipe" v-for="recipe in recipes">
          <RecipeCard
            v-bind="{
              id: recipe.recipe_id,
              title: recipe.recipe_name,
              imageSrc: recipe.image_url,
              imageAlt: recipe.recipe_name,
              description: recipe.recipe_description,
            }"
          />
        </div> -->
        <!-- Carte appelée non-dynamiquement depuis un tableau fonctionne sans lancé
           l'api mais bcp + simplifié que l'api niveau donnée -->
        <div
          class="p-index__recipe"
          v-for="(product, index) in displayedProducts"
          :key="index"
        >
          <RecipeCard
            v-bind="{
              id: index, // Utilisez l'index comme ID temporaire
              title: product.recipe_name,
              imageSrc: product.image_url,
              imageAlt: product.recipe_name,
            }"
          />
        </div>
      </div>
      <div class="p__button">
        <!-- <p>{{ displayedProducts.length }} / {{ products.length }}</p> -->
        <!-- <p @onclick="loadMoreCards">{{ pageCounter }}</p> -->
        <MyButton
          @click="loadMoreCards"
          variant="rounded"
          :icon="true"
          v-if="hasMoreProducts"
        >
          See more products
        </MyButton>
      </div>
      <MyTitleSection
        title="Services"
        subtitle="Why Choose Our Favorite Food"
      />
      <!-- {{ home.data.services }} -->
      <Services v-bind:services="home.data.services" />
      <MyTitleSection
        title="How to work"
        subtitle="Food Us An Important Part Of A Balanced Diet"
      />
      <MyTitleSection title="Testimonials" subtitle="Our Happy Client Says" />
    </section>
    <MySliderSection />
    <MyNewsletterSection />
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
  // max-width: 1600px; // en grand écran
  max-width: 1220px; // en moyen écran
  // max-width: 960px; // en petit écran
  margin: 40px auto;
}

.p__button {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
