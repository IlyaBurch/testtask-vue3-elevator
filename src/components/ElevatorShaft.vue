<template>
  <div class="shaft">
    <Button label="Открыть" @click="openDoors" />
    <Button label="change" @click="changeFloor(destination, floorsCount)" />
    <InputNumber v-model="destination" inputId="floor" />
    <!-- <TransitionGroup name="fruit-list" tag="ul"> -->
    <div v-for="item in floorsCount.slice().reverse()" :key="item.id" class="fruit-list-item">
      <ElevatorUnit :isOpened="isOpen" :floor="item.count" :isActive="item.active" />
    </div>
    <!-- </TransitionGroup> -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ElevatorUnit from './ElevatorUnit.vue'

import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'

let isOpen = ref(false)
const openDoors = function () {
  isOpen.value = !isOpen.value
}

let destination = ref(1)

const floorsCount = ref([
  { id: 0, count: 1, active: false },
  { id: 1, count: 2, active: false },
  { id: 2, count: 3, active: false },
  { id: 3, count: 4, active: false },
  { id: 4, count: 5, active: true }
])

const changeFloor = function (destination, arr) {
  let currentFloor = arr.findIndex((el) => el.active === true)
  let index = currentFloor
  const destinationIndex = arr[destination - 1]

  if (destinationIndex === undefined) {
    alert('Такого этажа нет')
    return
  }

  if (arr[currentFloor].count > destination) {
    let steps = arr[currentFloor].count - destination

    console.log('Шагов: ' + steps)

    for (let i = 0; i < steps; i++) {
      const downTheFloors = () => {
        setTimeout(
          () => {
            arr[index].active = false
            console.log(arr[index].count)
            arr[index - 1].active = true
            index--
            console.log('Индекс: ' + index)
          },
          1000 * (i + 1)
        )
      }
      downTheFloors()
    }
    console.log('Оставшиеся шаги: ' + steps)
  } else {
    let steps = destination - arr[currentFloor].count

    console.log('Шагов: ' + steps)

    for (let i = 0; i < steps; i++) {
      const upTheFloors = () => {
        setTimeout(
          () => {
            arr[index].active = false
            console.log(arr[index].count)
            arr[index + 1].active = true
            index++
            console.log('Индекс: ' + index)
          },
          1000 * (i + 1)
        )
      }
      upTheFloors()
    }
  }
}

// function upTheFloors() {
//   for (let i = floorsCount.value.length - 1; i >= 0; i--) {
//     floorsCount.value[i].active = false
//     if (floorsCount.value[i].id == destination.value - 1) {
//       floorsCount.value[i].active = true
//       break
//     }
//   }
//   destination.value = null
// }
</script>

<style scoped>
.shaft {
  width: 110px;
  border: 5px solid grey;
}
</style>
