import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useElevationStore = defineStore('elevation', () => {
  class Queue {
    constructor() {
      this.items = []
    }

    enqueue(item) {
      this.items.push(item)
    }

    dequeue() {
      return this.items.shift()
    }

    front() {
      return this.items[0]
    }

    isEmpty() {
      return this.items.length === 0
    }
  }
  const floorsCount = ref({
    id: 0,
    destiny: new Queue(),
    isResting: false,
    isMoving: false,
    directionUp: false,
    directionDown: false,
    floors: [
      { id: 0, count: 1, active: true },
      { id: 1, count: 2, active: false },
      { id: 2, count: 3, active: false },
      { id: 3, count: 4, active: false },
      { id: 4, count: 5, active: false }
    ]
  })
  const changeFloor = function () {
    // let arr = obj.floors
    floorsCount
    let currentFloor = this.floorsCount.floors.findIndex((el) => el.active === true)
    let destination = this.floorsCount.destiny.front() + 1
    let index = currentFloor

    if (destination === undefined) {
      alert('Такого этажа нет')
      return
    }

    if (this.floorsCount.floors[currentFloor].count > destination) {
      floorsCount.value.directionDown = true
      let steps = this.floorsCount.floors[currentFloor].count - destination

      for (let i = 0; i < steps; i++) {
        const downTheFloors = () => {
          setTimeout(
            () => {
              this.floorsCount.floors[index].active = false
              console.log(this.floorsCount.floors[index].count)
              this.floorsCount.floors[index - 1].active = true
              index--
              if (index == this.floorsCount.destiny.front()) {
                targetFloor()
              }
            },
            1000 * (i + 1)
          )
        }
        downTheFloors()
      }
    } else {
      let steps = destination - this.floorsCount.floors[currentFloor].count
      floorsCount.value.directionUp = true
      console.log(floorsCount.value.directionUp)

      for (let i = 0; i < steps; i++) {
        const upTheFloors = () => {
          setTimeout(
            () => {
              this.floorsCount.floors[index].active = false
              console.log(this.floorsCount.floors[index].count)
              this.floorsCount.floors[index + 1].active = true
              index++
              if (index === this.floorsCount.destiny.front()) {
                targetFloor()
              }
            },
            1000 * (i + 1)
          )
        }
        upTheFloors()
      }
    }
  }

  const addFloor = function (floor) {
    this.floorsCount.push({ id: this.floorsCount.length, count: floor, active: false })
  }

  function addQueue(destination) {
    this.floorsCount.destiny.enqueue(destination)
    console.log(destination)
  }

  function targetFloor() {
    floorsCount.value.isResting = true
    setTimeout(() => {
      floorsCount.value.destiny.dequeue()
      floorsCount.value.isResting = false
      floorsCount.value.directionUp = false
      floorsCount.value.directionDown = false
    }, 3000)
  }
  return { floorsCount, changeFloor, addFloor, addQueue }
})