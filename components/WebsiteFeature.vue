<template>
  <div class="pt-6">
    <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
      <div class="-mt-6">
        <div>
          <slot></slot>
        </div>
        <h3 class="mt-8 text-xl font-medium text-gray-900 tracking-tight">{{title}}</h3>
        <p class="mt-5 text-lg text-gray-500">
          {{description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description"],
};
</script>
