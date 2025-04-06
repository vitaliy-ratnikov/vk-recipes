<template>
    <div class="v-recipes-modal" @click.self="handleClose">
        <div class="v-recipes-modal__content">
            <button class="v-recipes-modal__close" aria-label="Закрыть" @click="handleClose">
                &times;
            </button>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['close'])

const handleClose = () => emit('close')

const onKeyDown = (e) => {
    if (e.key === 'Escape') emit('close')
}

onMounted(() => {
    document.body.classList.add('v-recipes-modal--is-open')
    window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
    document.body.classList.remove('v-recipes-modal--is-open')
    window.removeEventListener('keydown', onKeyDown)
})

</script>

<style lang="scss" scoped>
@import './styles/vRecipesModal/v-recipes-modal.scss';
</style>