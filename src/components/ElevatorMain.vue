<template>
  <div class="elevator--main">
    <ElevatorShaft />
    <ElevatorControl />
  </div>
</template>

<script setup>
import ElevatorShaft from './ElevatorShaft.vue'
import ElevatorControl from './ElevatorControl.vue'
</script>

<style scoped>
.elevator--main {
  display: flex;
}
</style>
