<template>
    <div class="v-recipes-search">
        <div class="v-recipes-search__wrapper">
            <input type="text" class="v-recipes-search__input" placeholder="Поиск рецепта" :value="modelValue"
                ref="inputRef" @input="$emit('update:modelValue', $event.target.value)" />
            <button v-if="modelValue" class="v-recipes-search__button" @click="handleReset">
                &times;
            </button>
            <v-recipes-favorite-button @click="store.showOnlyFavorites = !store.showOnlyFavorites" />
            <p class="v-recipes-search__favorite-text">
                {{ favoriteButtonText }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRecipesStore } from '@/stores/useRecipesStore'
import VRecipesFavoriteButton from '@/components/VRecipesFavoriteButton.vue'

const props = defineProps({
    modelValue: String
})
const emit = defineEmits(['update:modelValue', 'resetSearch'])

const store = useRecipesStore()

const inputRef = ref(null)

const handleReset = () => {
    emit('resetSearch')
    inputRef.value?.focus()
}

const isFavoriteView = computed(() => store.showOnlyFavorites)

const favoriteButtonText = computed(() =>
    isFavoriteView.value ? 'Показать все' : 'Только избранные'
)
</script>

<style lang="scss" scoped>
@import './styles/vRecipesSearch/v-recipes-search.scss';
</style>