<template>
  <NuxtLink :to="to"
    class="button-link-primary items-center bg-blue-600 text-white px-6 py-4 rounded-full font-bold transition-colors duration-300 hover:bg-blue-800  h-12">
    <span class="btn-text">{{ label }}</span>
    <svg v-if="showIcon" class="inline-block w-4 h-4 text-white relative bottom-[2px] left-[8px]" fill="none"
      stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
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
  showIcon: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped></style>