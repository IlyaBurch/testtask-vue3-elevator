<template>
  <div v-if="props.isActive">
    <div class="elevator--floor">
      <div v-if="props.up" class="arrow">
        <svg
          fill="#57f500"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 31.999 32"
          xml:space="preserve"
          transform="matrix(1, 0, 0, -1, 0, 0)"
          stroke="#57f500"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path
                d="M31.92,5.021l-14.584,22.5c-0.089,0.138-0.241,0.223-0.406,0.229c-0.004,0-0.009,0-0.014,0 c-0.16,0-0.312-0.076-0.404-0.205L0.096,5.044C-0.015,4.893-0.031,4.69,0.054,4.523C0.139,4.354,0.312,4.25,0.5,4.25h31 c0.183,0,0.352,0.1,0.438,0.261C32.026,4.67,32.019,4.867,31.92,5.021z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div v-else class="arrow">
        <svg
          fill="#1e5600"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 31.999 32"
          xml:space="preserve"
          transform="matrix(1, 0, 0, -1, 0, 0)"
          stroke="#1e5600"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path
                d="M31.92,5.021l-14.584,22.5c-0.089,0.138-0.241,0.223-0.406,0.229c-0.004,0-0.009,0-0.014,0 c-0.16,0-0.312-0.076-0.404-0.205L0.096,5.044C-0.015,4.893-0.031,4.69,0.054,4.523C0.139,4.354,0.312,4.25,0.5,4.25h31 c0.183,0,0.352,0.1,0.438,0.261C32.026,4.67,32.019,4.867,31.92,5.021z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div class="floor--number">{{ floorNum }}</div>
      <!-- <component :is="props.down"> Вниз </component> -->
      <div v-if="props.down" class="arrow">
        <svg
          fill="#55f301"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 31.999 32"
          xml:space="preserve"
          transform="matrix(1, 0, 0, 1, 0, 0)"
          stroke="#55f301"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path
                d="M31.92,5.021l-14.584,22.5c-0.089,0.138-0.241,0.223-0.406,0.229c-0.004,0-0.009,0-0.014,0 c-0.16,0-0.312-0.076-0.404-0.205L0.096,5.044C-0.015,4.893-0.031,4.69,0.054,4.523C0.139,4.354,0.312,4.25,0.5,4.25h31 c0.183,0,0.352,0.1,0.438,0.261C32.026,4.67,32.019,4.867,31.92,5.021z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div v-else class="arrow">
        <svg
          fill="#1e5600"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 31.999 32"
          xml:space="preserve"
          transform="matrix(1, 0, 0, 1, 0, 0)"
          stroke="#1e5600"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path
                d="M31.92,5.021l-14.584,22.5c-0.089,0.138-0.241,0.223-0.406,0.229c-0.004,0-0.009,0-0.014,0 c-0.16,0-0.312-0.076-0.404-0.205L0.096,5.044C-0.015,4.893-0.031,4.69,0.054,4.523C0.139,4.354,0.312,4.25,0.5,4.25h31 c0.183,0,0.352,0.1,0.438,0.261C32.026,4.67,32.019,4.867,31.92,5.021z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div class="elevator--unit">
      <div
        class="unit--door unit--door__left--closed"
        :class="{
          'unit--door__left--closed': !props.isOpened,
          'unit--door__left--open': props.isOpened
        }"
      />
      <div
        class="unit--door unit--door__right--closed"
        :class="{ 'unit--door__right--open': props.isOpened }"
      />
    </div>
  </div>
  <div v-else class="unit--empty" />
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  floor: {
    type: Number
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

const floorNum = computed(() => {
  let check = props.floor
  if (isNaN(check)) {
    return 0
  } else return props.floor
})
</script>

<style scoped>
.arrow {
  width: 20px;
  height: 20px;
}
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
  border: 2px solid whitesmoke;
  background: black;
  color: #57f500;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.floor--number {
  font-size: 20px;
  font-family: digital, sans-serif;
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
