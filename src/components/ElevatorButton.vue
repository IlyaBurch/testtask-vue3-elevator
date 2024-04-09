<template>
  <div class="elevator--button">
    <Button icon="pi pi-circle" @click="addQueue" />
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
  elevation.floorsCount.isMoving = true
  console.log(elevation.floorsCount.destiny.items.length)
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
