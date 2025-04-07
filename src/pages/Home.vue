<template>
    <div class="home">
        <h1 class="home__title">VK Recipes</h1>
        <div class="home__wrapper">

            <v-recipes-filters :tags="store.allTags" :activeTag="store.activeTag" @select="store.activeTag = $event"
                class="home__filters" />


            <v-recipes-search class="home__search" v-model="store.searchQuery" @resetSearch="store.resetSearch" />


            <v-recipes-pagination class="home__pagination" v-model="store.currentPage" :totalPages="store.totalPages" />
            <div class="home__cards" ref="listRef">

                <v-recipes-list v-if="store.filteredRecipes.length" :recipes="store.paginatedRecipes"
                    @recipeClick="openModal" />

                <v-recipes-empty v-else @reset="store.resetFilters" />
            </div>


            <v-recipes-modal v-if="isModalOpen" @close="isModalOpen = false">
                <v-recipes-details :recipe="selectedRecipe" />
            </v-recipes-modal>


        </div>
    </div>

</template>

<script setup>
import { ref, watch, onMounted, computed, onUnmounted } from 'vue'
import { useRecipesStore } from '@/stores/useRecipesStore'

import VRecipesList from '@/components/VRecipesList.vue'
import VRecipesModal from '@/components/VRecipesModal.vue'
import VRecipesDetails from '@/components/VRecipesDetails.vue'
import VRecipesFilters from '@/components/VRecipesFilters.vue'
import VRecipesSearch from '@/components/VRecipesSearch.vue'
import VRecipesEmpty from '@/components/VRecipesEmpty.vue'
import VRecipesPagination from '@/components/VRecipesPagination.vue'


const store = useRecipesStore()
const selectedRecipe = ref(null)
const isModalOpen = ref(false)

const openModal = (recipe) => {
    selectedRecipe.value = recipe
    isModalOpen.value = true
}

const listRef = ref(null)
watch(() => store.currentPage, (newPage, oldPage) => {
    if (newPage !== oldPage && listRef.value) {
        listRef.value.scrollIntoView({ behavior: 'smooth' })
    }
})

const updatePerPage = () => {
    store.recipesPerPage = window.innerWidth < 768 ? 8 : 12
}

onMounted(() => {
    updatePerPage()
    window.addEventListener('resize', updatePerPage)
})

onUnmounted(() => {
    window.removeEventListener('resize', updatePerPage)
})

const isFavoriteView = computed(() => store.showOnlyFavorites)
// const favoriteButtonText = computed(() =>
//     store.showOnlyFavorites ? 'Показать все' : 'Только избранные'
// )
</script>

<style lang="scss" scoped>
@import './styles/home.scss';
</style>