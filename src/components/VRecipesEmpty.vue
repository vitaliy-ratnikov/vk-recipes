<template>
    <div class="v-recipes-empty">
        <div class="v-recipes-empty__wrapper">
            <h2 class="v-recipes-empty__title">Ничего не найдено</h2>
            <p class="v-recipes-empty__text">Попробуй сбросить фильтры или изменить поисковый запрос</p>
            <button class="v-recipes-empty__button" @click="$emit('reset')">Сбросить всё</button>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['reset'])
</script>

<style lang="scss" scoped>
@import './styles/vRecipesEmpty/v-recipes-empty.scss';
</style>