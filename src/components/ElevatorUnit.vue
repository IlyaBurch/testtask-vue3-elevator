<template>
  <div v-if="props.isActive === true">
    <div class="elevator--floor">
      <div v-show="props.up">вверх</div>
      <div class="floor--number">{{ floor }}</div>
      <!-- <component :is="props.down"> Вниз </component> -->
      <div v-show="props.down">вниз</div>
    </div>
    <div class="elevator--unit">
      <div
        class="unit--door unit--door__left--closed"
        :class="{ 'unit--door__left--open': props.isOpened }"
      />
      <div
        class="unit--door unit--door__right--closed"
        :class="{ 'unit--door__right--open': props.isOpened }"
      />
    </div>
  </div>
  <div class="unit--empty" v-else />
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  floor: {
    type: Number,
    default: 1
  },
  isOpened: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    required: true
  },
  up: {
    type: Boolean
  },
  down: {
    type: Boolean
  }
})
</script>

<style scoped>
.unit--empty {
  width: 100px;
  height: 190px;
  background-color: antiquewhite;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
}
.elevator--floor {
  width: 100px;
  height: 40px;
  border: 2px solid black;
  display: grid;
  place-items: center;
}
.floor--number {
  font-size: 20px;
}
.elevator--unit {
  width: 100px;
  height: 150px;
  border: 5px solid black;
  background: grey;
  display: flex;
  overflow: hidden;
}

.unit--door {
  width: 50px;
  height: 140px;
  border: 5px solid black;
  background: lightgrey;
}

.unit--door__left--closed {
  animation: left-door--closed 1s ease forwards;
}

@keyframes left-door--closed {
  0% {
    transform: translateX(-50px);
  }
  100% {
    transform: translateX(0);
  }
}

.unit--door__right--closed {
  animation: right-door--closed 1s ease forwards;
}

@keyframes right-door--closed {
  0% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0);
  }
}

.unit--door__left--open {
  animation: left-door--open 1s ease forwards;
}

@keyframes left-door--open {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50px);
  }
}

.unit--door__right--open {
  animation: right-door--open 1s ease forwards;
}

@keyframes right-door--open {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50px);
  }
}
</style>
