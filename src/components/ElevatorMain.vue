<template>
  <div class="elevator--main">
    <div class="flex">
      <ElevatorShaft />
      <ElevatorControl />
    </div>
    <Button @click="repair" class="repair" label="Кнопка сброса" />
  </div>
</template>

<script setup>
import Button from 'primevue/button'

import ElevatorShaft from './ElevatorShaft.vue'
import ElevatorControl from './ElevatorControl.vue'

import { useElevationStore } from '@/stores/elevation'
const elevation = useElevationStore()

function repair() {
  elevation.floorsCount.destiny.items = []
  elevation.floorsCount.floors = [
    { id: 0, count: 1, active: true },
    { id: 1, count: 2, active: false },
    { id: 2, count: 3, active: false },
    { id: 3, count: 4, active: false },
    { id: 4, count: 5, active: false }
  ]
  elevation.floorsCount.isResting = false
  elevation.floorsCount.isMoving = true
  elevation.floorsCount.directionUp = false
  elevation.floorsCount.directionDown = false
  location.reload()
}
</script>

<style scoped>
.elevator--main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.repair {
  height: 100px;
  width: 200px;
}
.flex {
  display: flex;
}
</style>
