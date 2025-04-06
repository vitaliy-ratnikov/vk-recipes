<template>
    <div class="v-recipes-slider">
        <a class="v-recipes-slider__item" v-for="(slide, index) in slides" :key="index" :href="slide"
            data-fancybox="gallery">
            <img class="v-recipes-slider__img" :src="slide" :alt="`инструкция ${index + 1}`" />
        </a>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const props = defineProps({
    slides: {
        type: Array,
        required: true
    }
})

onMounted(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: { autoStart: true },
        Toolbar: ['zoom', 'fullscreen', 'close']
    })
})
</script>

<style lang="scss" scoped>
@import './styles/vRecipesSlider/v-recipes-slider.scss';
</style>