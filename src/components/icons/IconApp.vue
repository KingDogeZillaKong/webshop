<script setup lang="ts">
const { foregroundColor } = defineProps<{ foregroundColor: string }>()
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :fill="foregroundColor" viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="browser">
        <rect width="24" height="24" opacity="0" />
        <path
          d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14zM5 9V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3z"
        />
        <circle cx="8" cy="7.03" r="1" />
        <circle cx="12" cy="7.03" r="1" />
      </g>
    </g>
  </svg>
</template>
