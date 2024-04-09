<template>
  <div class="elevator--main">
    <div class="flex">
      <ElevatorShaft />
      <ElevatorControl />
    </div>
    <Button @click="elevation.repair" class="repair" label="Кнопка сброса" />
  </div>
</template>

<script setup>
import Button from 'primevue/button'

import ElevatorShaft from './ElevatorShaft.vue'
import ElevatorControl from './ElevatorControl.vue'

import { useElevationStore } from '@/stores/elevation'
const elevation = useElevationStore()
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
