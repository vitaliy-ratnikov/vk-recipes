<template>
    <button class="v-recipes-favorite-button" @click.stop="toggleFavorite(recipeId)">
        <component :is="isFavorite(recipeId) ? FavoriteIconFull : FavoriteIconEmpty" />
    </button>
</template>

<script setup>
import FavoriteIconEmpty from '@/components/icons/variants/FavoriteIconEmpty.vue'
import FavoriteIconFull from '@/components/icons/variants/FavoriteIconFull.vue'
import { useRecipesStore } from '@/stores/useRecipesStore'

const props = defineProps({
    recipeId: {
        type: Number,
        required: false
    }
})

const store = useRecipesStore()
const isFavorite = store.isFavorite
const toggleFavorite = store.toggleFavorite
</script>

<style lang="scss" scoped>
@import './styles/vRecipesFavoriteButton/v-recipes-favorite-button.scss';
</style>