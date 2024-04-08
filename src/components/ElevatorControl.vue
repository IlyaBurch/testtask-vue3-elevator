<template>
  <ul class="elevator--buttons">
    <li v-for="item in elevation.floorsCount.floors.slice().reverse()" :key="item.id">
      <ElevatorButton :floor="item.id" />
    </li>
  </ul>
</template>

<script setup>
import { watch } from 'vue'
import ElevatorButton from './ElevatorButton.vue'

import { useElevationStore } from '@/stores/elevation'
const elevation = useElevationStore()

watch(elevation.floorsCount.destiny, (newX) => {
  if (newX && !elevation.floorsCount.isResting) {
    console.log('я сработал:' + elevation.floorsCount.isResting)
    elevation.changeFloor()
    // if (newQueue && !elevation.floorsCount.isResting && newQueue !== undefined) {
    //   if (elevation.floorsCount.destiny.front() !== elevation.currentFloor.value) {
    //     console.log('я сработал:' + newQueue.front())
    //     elevation.changeFloor()
    //   }
  } else {
    // console.log(newQueue)
    // console.log(oldQueue)
  }
})
</script>

<style scoped>
.elevator--buttons {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
