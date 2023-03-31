import { defineStore } from 'pinia'
import { home } from '~~/api/home';

export const useHomeStore = defineStore('homeStore', () => {

  // static json data for home page
  const data = home

  const sliders = ref(data[0].slider)
  const solutions = ref(data[0].solution)

  const getSlider = (sliderID: number) => {
    if (sliderID) {
      return sliders.value.filter((value) =>
        value.id === sliderID
      )
    }
  }

  return { sliders, solutions, getSlider }
})
