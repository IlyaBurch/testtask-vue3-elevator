<template>
  <div class="elevator--button">
    <Button icon="pi pi-circle" @click="addQueue" />
    {{ props.floor + 1 }}
  </div>
</template>

<script setup>
import Button from 'primevue/button'

import { useElevationStore } from '@/stores/elevation'
const elevation = useElevationStore()

const props = defineProps({
  floor: {
    type: Number,
    required: true,
    default: 1
  }
})

function addQueue() {
  elevation.addQueue(props.floor)
  console.log('кнопка сработала')
}
</script>

<style scoped>
.elevator--button {
  width: 60px;
  height: 195px;
  display: grid;
  place-items: center;
}
</style>
