import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  const $reset = () => {
    count.value = 0;
  };

  const decrement = () => {
    count.value--;
  };

  const increment = () => {
    count.value++;
  };

  return { count, doubleCount, $reset, decrement, increment };
});
