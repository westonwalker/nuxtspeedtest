<template>
  <a class="bg-black text-white px-6 py-4 text-base md:text-xl rounded-md font-semibold shadow-solid-light" :href="href">
    <slot></slot>>
  </a>
</template>

<script>
export default {
  props: ["href"],
};
</script>
