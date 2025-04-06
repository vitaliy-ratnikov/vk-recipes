<template>
    <div class="v-recipes-filters">
        <button class="v-recipes-filters__tab" :class="vRecipesFiltersButtonClasses(null)"
            @click="$emit('select', null)">
            Все теги
        </button>
        <div class="v-recipes-filters__wrapper">
            <div class="v-recipes-filters__container">
                <button v-for="tag in tags" :key="tag" class="v-recipes-filters__tab"
                    :class="vRecipesFiltersButtonClasses(tag)" @click="$emit('select', tag)">
                    {{ tag }}
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    tags: Array,
    activeTag: String
})
const emit = defineEmits(['select'])

const vRecipesFiltersButtonClasses = (tag) =>
    tag === props.activeTag ? 'v-recipes-filters__tab--active' : ''
</script>


<style lang="scss" scoped>
@import './styles/vRecipesFilters/v-recipes-filters.scss';
</style>