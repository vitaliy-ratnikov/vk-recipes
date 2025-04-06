<template>
    <div class="v-recipes-card" @click="handleClick">
        <h3 class="v-recipes-card__title">{{ recipe.title }}</h3>
        <p class="v-recipes-card__time">{{ recipe.time }}</p>
        <v-recipes-base-icon class="v-recipes-card__icon" name="CardFood" />

        <ul class="v-recipes-card__tag v-recipes-card-tag">
            <li class="v-recipes-card-tag__item" v-for="tag in recipe.tagsList" :key="tag.id"
                :style="{ backgroundColor: tag.color || '#eee' }">{{ tag.name }}</li>
        </ul>
        <v-recipes-favorite-button class="v-recipes-card__button" :recipe-id="recipe.id" />
    </div>

</template>

<script setup>
import { useRecipesStore } from '@/stores/useRecipesStore'
import VRecipesFavoriteButton from '@/components/VRecipesFavoriteButton.vue'
import vRecipesBaseIcon from '@/components/icons/VRecipesBaseIcon.vue'

const props = defineProps({
    recipe: {
        type: Object,
        required: true,
    },
})

const emit = defineEmits(['click'])

const store = useRecipesStore()

const handleClick = () => {
    emit('click', props.recipe)
}

const toggleFavorite = store.toggleFavorite
const isFavorite = store.isFavorite
</script>

<style lang="scss" scoped>
@import './styles/vRecipesCard/v-recipes-card.scss';
</style>