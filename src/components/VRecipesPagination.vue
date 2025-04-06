<template>
    <div class="v-recipes-pagination" v-if="totalPages > 1">
        <button class="v-recipes-pagination__button" v-for="page in totalPages" :key="page" @click="updatePage(page)"
            :class="vkRecipesPaginationbuttonClasses(page)">
            {{ page }}
        </button>
    </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    modelValue: {
        type: Number,
        required: true
    },
    totalPages: {
        type: Number,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const updatePage = (page) => {
    emit('update:modelValue', page)
}
const vkRecipesPaginationbuttonClasses = (page) => {
    return {
        'v-recipes-pagination__button--active': props.modelValue === page
    }
}
</script>

<style lang="scss" scoped>
@import './styles/vRecipesPagination/v-recipes-pagination.scss';
</style>