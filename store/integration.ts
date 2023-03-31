import { defineStore } from 'pinia'

export const useIntegrationStore = defineStore('integrationStore', () => {

  const clients = ref()
  const partners = ref()

  const fetchIntegration = async () => { 
    const { data }: any = await useFetch('https://642645f0d24d7e0de46ce888.mockapi.io/api/integration');
    console.log(data);
    
    if (data.value) {
      clients.value = data.value[0].client;
      partners.value = data.value[0].partner;
    }
  };

  return { clients, partners, fetchIntegration }
})
