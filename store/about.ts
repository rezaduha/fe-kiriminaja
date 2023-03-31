import { defineStore } from 'pinia'

export const useAboutStore = defineStore('aboutStore', () => {

  const hero = ref()
  const visions = ref()
  const leaders = ref()

  const fetchAbout = async () => { 
    const { data }: any = await useFetch('https://642645f0d24d7e0de46ce888.mockapi.io/api/about');
    console.log(data);
    
    if (data.value) {
      hero.value = data.value[0].hero;
      visions.value = data.value[0].visions.vision;
      leaders.value = data.value[0].leaders;
    }
  };

  return { hero, visions, leaders, fetchAbout }
})
