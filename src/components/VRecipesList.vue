<template>
    <div class="v-recipes-list">
        <v-recipes-card class="v-recipes-list__item" v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"
            @click="handleCardClick" />
    </div>
</template>

<script setup>
import VRecipesCard from '@/components/VRecipesCard.vue';

const props = defineProps({
    recipes: {
        type: Array,
        required: true,
    }
})
const emit = defineEmits(['recipeClick'])

const handleCardClick = (recipe) => {
    emit('recipeClick', recipe);
}

</script>

<style lang="scss" scoped>
@import './styles/vRecipesList/v-recipes-list.scss';
</style>