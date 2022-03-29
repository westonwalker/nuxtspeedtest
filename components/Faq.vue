<template>
  <div class="pt-6">
    <dt class="text-lg">
      <!-- Expand/collapse question button -->
      <div type="button" class="text-left w-full flex justify-between items-start text-gray-400">
        <p class="text-xl md:text-2xl font-semibold text-gray-900"> {{ question }} </p>
      </div>
    </dt>
    <dd class="mt-2 pr-12" id="faq-0">
      <p class="text-base md:text-lg text-gray-700">
        <slot></slot>
      </p>
    </dd>
  </div>
</template>

<script>
export default {
  props: ["question"],
};
</script>
