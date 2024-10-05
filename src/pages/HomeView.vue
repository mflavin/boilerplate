<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);
</script>

<template>
  <h1>Boilerplate using modern tools</h1>
  <p>Counter: {{ count }}</p>
  <p>Double Counter: {{ doubleCount }}</p>
  <button @click="counterStore.increment">Increment</button>
  <button @click="counterStore.decrement">Decrement</button>
  <button @click="counterStore.$reset">Reset</button>
</template>
