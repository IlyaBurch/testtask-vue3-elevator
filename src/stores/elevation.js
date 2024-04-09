import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useElevationStore = defineStore(
  'elevation',
  () => {
    class Queue {
      constructor() {
        this.items = []
      }

      enqueue(item) {
        // const isEqual = (el) => el === item
        // const findNum = this.items.find((el) => el === item)
        // if (this.items.length === 0) {
        //   this.items.push(item)
        // }
        // if (findNum !== undefined) {
        //   this.items.push(item)
        // }
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
      destination: 1,
      currentFloor: 0,
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
    function changeFloor() {
      // let arr = obj.floors
      floorsCount.value.isMoving = true
      floorsCount.value.destination = this.floorsCount.destiny.front() + 1
      let currentFloor = this.floorsCount.floors.findIndex((el) => el.active === true)
      let destination = this.floorsCount.destiny.front() + 1
      let index = currentFloor

      if (destination === undefined) {
        alert('Такого этажа нет')
        return
      }
      if (floorsCount.value.isResting === true) {
        if (floorsCount.value.isMoving === true) {
          targetFloor()
          floorsCount.value.isResting = false
          floorsCount.value.isMoving = false
          return
        }
      }

      if (this.floorsCount.floors[currentFloor].count > destination) {
        floorsCount.value.directionDown = true
        let steps = this.floorsCount.floors[currentFloor].count - destination
        for (let i = 0; i < steps; i++) {
          const downTheFloors = () => {
            setTimeout(
              () => {
                this.floorsCount.floors[index].active = false
                this.floorsCount.floors[index - 1].active = true
                floorsCount.value.currentFloor = index
                index--
                if (
                  index === this.floorsCount.destiny.front() &&
                  floorsCount.value.isMoving === true
                ) {
                  targetFloor()
                  floorsCount.value.isResting = true
                  floorsCount.value.isMoving = false

                  return
                }
              },
              1000 * (i + 1)
            )
          }
          downTheFloors()
        }
      } else {
        let steps = destination - this.floorsCount.floors[currentFloor].count
        for (let i = 0; i < steps; i++) {
          const upTheFloors = () => {
            setTimeout(
              () => {
                this.floorsCount.floors[index].active = false
                this.floorsCount.floors[index + 1].active = true
                floorsCount.value.currentFloor = index
                floorsCount.value.directionUp = true
                index++
                if (
                  index === this.floorsCount.destiny.front() &&
                  floorsCount.value.isMoving === true
                ) {
                  targetFloor()
                  floorsCount.value.isResting = true
                  floorsCount.value.isMoving = false

                  return
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
    }

    function targetFloor() {
      setTimeout(() => {
        floorsCount.value.isResting = false
        floorsCount.value.isMoving = true
        floorsCount.value.directionUp = false
        floorsCount.value.directionDown = false
        floorsCount.value.destiny.dequeue()
      }, 3000)
    }
    return { floorsCount, changeFloor, addFloor, addQueue }
  },
  {
    persist: true
  }
)
