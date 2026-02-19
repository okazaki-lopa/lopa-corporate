<template>
  <NuxtLink :to="to" class="button-link-secondary items-center px-0 py-0 rounded-full font-bold h-12">
    <span class="btn-text">{{ label }}</span>
    <span
      class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center ml-4 transition-colors duration-300 hover:bg-blue-800">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },

});
</script>

<style lang="scss" scoped></style>