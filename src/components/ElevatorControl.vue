<template>
  <!-- <button @click="elevation.changeFloor">погнали нахуй</button> -->
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
    console.log('я сработал')
    // console.log(newX[0])
    elevation.changeFloor()
    // if (newQueue && !elevation.floorsCount.isResting && newQueue !== undefined) {
    //   if (elevation.floorsCount.destiny.front() !== elevation.currentFloor.value) {
    //     console.log('я сработал:' + newQueue.front())
    //     elevation.changeFloor()
    //   }
  } else {
    console.log('не запущен')
    // console.log(oldQueue)
  }
})
// watch(elevation.floorsCount.destiny, (newDestiny, oldDestiny) => {
//   if (
//     // newDestiny &&
//     // newDestiny.length > 0 &&
//     newDestiny[0] !== elevation.floorsCount.currentFloor &&
//     !elevation.floorsCount.isResting
//   ) {
//     elevation.changeFloor()
//   } else {
//     console.log('length' + newDestiny.length)
//     console.log('first' + newDestiny[0])
//     console.log('current' + elevation.floorsCount.currentFloor)
//     console.log(newDestiny)
//   }
// })
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
