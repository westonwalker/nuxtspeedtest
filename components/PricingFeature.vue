<template>
  <li class="flex items-start">
    <div class="flex-shrink-0">
      <!-- Heroicon name: outline/check -->
      <svg class="flex-shrink-0 h-8 w-8 text-[#7de2e6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <p class="ml-3 text-lg font-medium text-gray-500">{{ description }}</p>
  </li>
</template>

<script>
export default {
  props: ["description"],
};
</script>
