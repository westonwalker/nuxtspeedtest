<template>
  <div>
    <nav class="relative px-6 py-6 flex justify-between items-center z-10 max-w-7xl mx-auto">
      <a class="text-3xl font-bold leading-none" href="#">
        <!-- <img class="h-12" src="atis-assets/logo/atis/atis-mono-black.svg" alt="" width="auto"></a> -->
        <Logo />
      </a>
      <div class="lg:hidden">
        <button @click="showMobileMenu = true" type="button" class="navbar-burger flex items-center text-gray-400 p-3">
          <svg class="block h-4 w-4 fill-current" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li>
          <!-- active = text-orange-500 -->
          <NuxtLink class="text-sm text-gray-400 hover:text-gray-500" v-bind:class="{ 'text-orange-500': $route.path == '/' }" to="/">Home</NuxtLink>
        </li>
        <li class="text-gray-800">
          <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </li>
        <li>
          <NuxtLink class="text-sm text-gray-400 hover:text-gray-500" to="#about">About Us</NuxtLink>
        </li>
        <li class="text-gray-800">
          <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </li>
        <li>
          <NuxtLink class="text-sm text-gray-400 hover:text-gray-500" to="#services">Services</NuxtLink>
        </li>
        <li class="text-gray-800">
          <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </li>
        <li>
          <NuxtLink class="text-sm text-gray-400 hover:text-gray-500" v-bind:class="{ 'text-orange-500': $route.path == '/projects' }" to="#projects">Projects</NuxtLink>
        </li>
        <li class="text-gray-800">
          <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </li>
        <li>
          <NuxtLink class="text-sm text-gray-400 hover:text-gray-500" v-bind:class="{ 'text-orange-500': $route.path == '/testimonials' }" to="#projects">Testimonials</NuxtLink>
        </li>
      </ul>
      <NuxtLink class="hidden lg:inline-block py-2 px-6 bg-white hover:bg-gray-50 text-base text-orange-500 font-bold rounded-l-xl rounded-t-xl transition duration-200" to="#contact">
        Get a Quote
      </NuxtLink>
    </nav>
    <img class="hidden lg:block absolute inset-0 w-full" src="atis-assets/background/lines.svg" alt="">
    <div v-if="showMobileMenu" class="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav class="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
        <div class="flex items-center mb-8">
          <NuxtLink class="mr-auto text-3xl font-bold leading-none" to="/">
            <Logo />
          </NuxtLink>
          <button @click="showMobileMenu = false" type="button" class="navbar-close">
            <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg></button>
        </div>
        <div>
          <ul>
            <li class="mb-1">
              <NuxtLink class="block p-4 text-sm font-semibold text-gray-400 hover:bg-orange-50 hover:text-orange-500 rounded" to="/">
                Home
              </NuxtLink>
            </li>
            <li class="mb-1">
              <NuxtLink class="block p-4 text-sm font-semibold text-gray-400 hover:bg-orange-50 hover:text-orange-500 rounded" to="#about">
                About Us
              </NuxtLink>
            </li>
            <li class="mb-1">
              <NuxtLink class="block p-4 text-sm font-semibold text-gray-400 hover:bg-orange-50 hover:text-orange-500 rounded" to="#services">
                Services
              </NuxtLink>
            </li>
            <li class="mb-1">
              <NuxtLink class="block p-4 text-sm font-semibold text-gray-400 hover:bg-orange-50 hover:text-orange-500 rounded" to="#projects">
                Projects
              </NuxtLink>
            </li>
            <li class="mb-1">
              <NuxtLink class="block p-4 text-sm font-semibold text-gray-400 hover:bg-orange-50 hover:text-orange-500 rounded" to="#projects">
                Testimonials
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="mt-auto">
          <div class="pt-6">
            <NuxtLink class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-orange-500 hover:bg-orange-600 rounded-l-xl rounded-t-xl" to="#contact">
              Get a Quote
            </NuxtLink>
          </div>
          <p class="my-4 text-xs text-center text-gray-400">
            <span>© 2022 All rights reserved.</span>
          </p>
          <div class="text-center">
            <a class="inline-block px-1" href="#">
              <Facebook />
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
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
