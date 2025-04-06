<template>
    <div class="v-recipes-details">
        <h2 class="v-recipes-details__title">{{ recipe.title }}</h2>
        <p class="v-recipes-details__time">Время приготовления - {{ recipe.time }}</p>
        <p class="v-recipes-details__description">{{ recipe.description }}</p>

        <div class="v-recipe-details-kbju v-recipe-details__kbju">
            <p class="v-recipe-details-kbju__item"><strong class="v-recipe-details-kbju__highlight">Калории:</strong> {{
                recipe.kbju.kcal }} ккал</p>
            <p class="v-recipe-details-kbju__item"><strong class="v-recipe-details-kbju__highlight">Б:</strong> {{
                recipe.kbju.proteins }}</p>
            <p class="v-recipe-details-kbju__item"><strong class="v-recipe-details-kbju__highlight">Ж:</strong> {{
                recipe.kbju.fats }}</p>
            <p class="v-recipe-details-kbju__item"><strong class="v-recipe-details-kbju__highlight">У:</strong> {{
                recipe.kbju.carbs }}</p>
        </div>

        <h3 class="v-recipes-details__subtitle">Ингредиенты:</h3>
        <ul class="v-recipes-details-ingredients v-recipes-details__ingredients">
            <li class="v-recipes-details-ingredients__item" v-for="(item, index) in recipe.ingredients" :key="index">
                {{ item }}
            </li>
        </ul>

        <h3 class="v-recipes-details__subtitle">Инструкция</h3>
        <v-recipes-slider class="v-recipes-details__slider" :slides="recipe.slides" />
    </div>

</template>

<script setup>
import VRecipesSlider from './VRecipesSlider.vue'
const props = defineProps({
    recipe: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped>
@import './styles/vRecipesDetails/v-recipes-details.scss';
</style>