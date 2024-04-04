<template>
  <div class="shaft">
    <Button label="Открыть" @click="openDoors" />
    <div v-for="item in floorsCount" :key="item.id">
      <ElevatorUnit :isOpened="isOpen" :floor="item.count" :isActive="item.active" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ElevatorUnit from './ElevatorUnit.vue'

import Button from 'primevue/button'

let isOpen = ref(false)

const floorsCount = [
  { id: 0, count: 5, active: false },
  { id: 1, count: 4, active: false },
  { id: 2, count: 3, active: false },
  { id: 3, count: 2, active: false },
  { id: 4, count: 1, active: true }
]

// const openDoors = computed(() => {
//   return !isOpen.value
// })
const openDoors = function () {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.shaft {
  width: 110px;
  border: 5px solid grey;
}
</style>
