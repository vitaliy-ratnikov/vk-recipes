import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import recipesData from "@/modules/recipes/data/recipes.json";

export const useRecipesStore = defineStore("recipes", () => {
  const recipes = ref(recipesData);
  const searchQuery = ref("");
  const activeTag = ref(null);
  const currentPage = ref(1);
  const recipesPerPage = ref(12);
  const favorites = ref([]);
  const showOnlyFavorites = ref(false);

  const filteredRecipes = computed(() => {
    const base = showOnlyFavorites.value
      ? recipes.value.filter((r) => favorites.value.includes(r.id))
      : recipes.value;

    const query = searchQuery.value.toLowerCase();

    return base.filter((recipe) => {
      const inTitle = recipe.title.toLowerCase().includes(query);
      const inIngredients = recipe.ingredients?.some((i) =>
        i.toLowerCase().includes(query)
      );
      const inTags = recipe.tagsList?.some((tag) =>
        tag.name.toLowerCase().includes(query)
      );
      const matchesSearch = inTitle || inIngredients || inTags;
      const matchesTag = activeTag.value
        ? recipe.tagsList.some((tag) => tag.name === activeTag.value)
        : true;
      return matchesSearch && matchesTag;
    });
  });

  const paginatedRecipes = computed(() => {
    const start = (currentPage.value - 1) * recipesPerPage.value;
    return filteredRecipes.value.slice(start, start + recipesPerPage.value);
  });

  const totalPages = computed(() => {
    return Math.ceil(filteredRecipes.value.length / recipesPerPage.value);
  });

  const allTags = computed(() => {
    const set = new Set();
    recipes.value.forEach((r) =>
      r.tagsList.forEach((tag) => set.add(tag.name))
    );
    return Array.from(set);
  });

  const favoriteRecipes = computed(() => {
    return recipes.value.filter((recipe) =>
      favorites.value.includes(recipe.id)
    );
  });

  const toggleFavorite = (recipeId) => {
    if (favorites.value.includes(recipeId)) {
      favorites.value = favorites.value.filter((id) => id !== recipeId);
    } else {
      favorites.value.push(recipeId);
    }
  };

  const isFavorite = (recipeId) => {
    return favorites.value.includes(recipeId);
  };

  const resetSearch = () => {
    searchQuery.value = "";
  };

  const resetFilters = () => {
    searchQuery.value = "";
    activeTag.value = null;
    showOnlyFavorites.value = false;
  };

  try {
    const stored = localStorage.getItem("vk-favorites");
    if (stored) {
      favorites.value = JSON.parse(stored);
    }
  } catch (error) {
    console.error("Ошибка при чтении избранного из localStorage:", error);
  }

  watch(
    favorites,
    (newArr) => {
      localStorage.setItem("vk-favorites", JSON.stringify(newArr));
    },
    { deep: true }
  );

  return {
    recipes,
    searchQuery,
    activeTag,
    currentPage,
    recipesPerPage,
    filteredRecipes,
    paginatedRecipes,
    totalPages,
    allTags,
    favoriteRecipes,
    favorites,
    showOnlyFavorites,
    resetSearch,
    resetFilters,
    toggleFavorite,
    isFavorite,
  };
});
