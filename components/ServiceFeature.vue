<template>
  <div class="relative">
    <dt>
      <svg class="absolute h-8 w-8 text-[#7de2e6]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p class="ml-9 text-xl leading-6 font-medium text-gray-900">{{title}}</p>
    </dt>
    <dd class="mt-2 ml-9 text-lg text-gray-500">{{description}}</dd>
  </div>
</template>

<script>
export default {
  props: ["title", "description"],
};
</script>
