import {create} from 'zustand';

export const usePlanStore = create(set => ({
  plants: [],
  getPlants: async () => {
    await fetch('https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q')
      .then(res => res.json())
      .then(response => {
        set({plants: response});
      });
  },
}));
