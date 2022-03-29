<template>
  <header>
    <div class="relative bg-white">
      <div class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:space-x-10 lg:px-8">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Webjoy</span>
            <nuxt-img class="h-8 w-auto md:h-10" src="/webjoy-logo-black.svg" alt="Webjoy" />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button @click="showMobileMenu = true" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <NuxtLink to="#about" class="font-bold text-base text-black border-b-4 hover:border-black border-transparent">Benefits</NuxtLink>
          <NuxtLink to="#pricing" class="font-bold text-base text-black border-b-4 hover:border-black border-transparent">Pricing</NuxtLink>
          <NuxtLink to="#faq" class="font-bold text-base text-black border-b-4 hover:border-black border-transparent">FAQs</NuxtLink>
          <NuxtLink to="#contact" class="font-bold text-base text-black border-b-4 hover:border-black border-transparent">Contact</NuxtLink>
        </nav>
      </div>
      <!--
        Mobile menu, show/hide based on mobile menu state.
      -->
      <div v-if="showMobileMenu" class="absolute z-30 top-0 inset-x-0 p-2 md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <nuxt-img class="h-8 w-auto" src="/webjoy-logo-black.svg" alt="Webjoy" />
              </div>
              <div class="-mr-2">
                <button @click="showMobileMenu = false" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <NuxtLink to="#about" class="text-base font-medium">Benefits</NuxtLink>
              <NuxtLink to="#pricing" class="text-base font-medium">Pricing</NuxtLink>
              <NuxtLink to="#faq" class="text-base font-medium">FAQs</NuxtLink>
              <NuxtLink to="#contact" class="text-base font-medium">Contact</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
};
</script>
