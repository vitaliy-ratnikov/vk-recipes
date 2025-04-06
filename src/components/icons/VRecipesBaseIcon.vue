<template>
    <component :is="iconComponent" />
</template>

<script setup>
import { computed } from 'vue'
import * as icons from './variants'

const props = defineProps({
    name: {
        type: String,
        required: true,
        validator: value => Object.keys(icons).includes(value),
    }
})

const iconComponent = computed(() => icons[props.name])
</script>