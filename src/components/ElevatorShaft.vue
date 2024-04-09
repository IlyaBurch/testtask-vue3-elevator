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
        :floor="elevation.floorsCount.destination"
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
</script>

<style scoped>
.shaft {
  width: 110px;
  border: 5px solid grey;
}
</style>
