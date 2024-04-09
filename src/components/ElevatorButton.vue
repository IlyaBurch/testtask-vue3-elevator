<template>
  <div class="elevator--button">
    <Button icon="pi pi-circle" @click="addQueue" :loading="isInQueue" />
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import { computed } from 'vue'

import { useElevationStore } from '@/stores/elevation'
const elevation = useElevationStore()

const props = defineProps({
  floor: {
    type: Number,
    required: true,
    default: 1
  }
})

const isInQueue = computed(() => {
  const findNum = elevation.floorsCount.destiny.items.find((el) => el === props.floor)
  if (findNum) {
    return true
  } else {
    return false
  }
})

function addQueue() {
  const findNum = elevation.floorsCount.destiny.items.find((el) => el === props.floor)
  // if (elevation.floorsCount.destiny.items.length === 0) {
  //   elevation.addQueue(props.floor)
  //   elevation.floorsCount.isMoving = true
  // }
  if (findNum === undefined) {
    elevation.addQueue(props.floor)
    elevation.floorsCount.isMoving = true
  }
  // elevation.addQueue(props.floor)
  // elevation.floorsCount.isMoving = true
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
