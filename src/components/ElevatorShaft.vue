<template>
  <div class="shaft">
    <!-- <InputNumber v-model="destination" inputId="floor" /> -->
    <!-- <TransitionGroup name="fruit-list" tag="ul"> -->
    <div
      v-for="item in elevation.floorsCount.floors.slice().reverse()"
      :key="item.id"
      class="fruit-list-item"
    >
      <ElevatorUnit
        :isOpened="elevation.floorsCount.isResting"
        :floor="elevation.floorsCount.destiny[0]"
        :isActive="item.active"
        :up="elevation.floorsCount.directionUp"
        :down="elevation.floorsCount.directionDown"
      />
    </div>
    <!-- </TransitionGroup> -->
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import ElevatorUnit from './ElevatorUnit.vue'

import { useElevationStore } from '@/stores/elevation'
const elevation = useElevationStore()

let isOpen = ref(false)
// const openDoors = function () {
//   isOpen.value = !isOpen.value
// }

// watch(elevation.floorsCount.destiny, (newQueue) => {
//   if (newQueue && !elevation.floorsCount.isResting && newQueue !== undefined) {
//     console.log('я сработал:' + newQueue.front())
//     elevation.changeFloor()
//     // if (newQueue && !elevation.floorsCount.isResting && newQueue !== undefined) {
//     //   if (elevation.floorsCount.destiny.front() !== elevation.currentFloor.value) {
//     //     console.log('я сработал:' + newQueue.front())
//     //     elevation.changeFloor()
//     //   }
//   } else {
//     console.log('я не отработал')
//   }
// })
</script>

<style scoped>
.shaft {
  width: 110px;
  border: 5px solid grey;
}
</style>
