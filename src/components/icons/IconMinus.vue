<script setup lang="ts">
const { foregroundColor } = defineProps<{ foregroundColor: string }>()
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g :fill="foregroundColor" data-name="Layer 2">
      <g data-name="minus-circle">
        <rect width="24" height="24" opacity="0" />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z" />
      </g>
    </g>
  </svg>
</template>
