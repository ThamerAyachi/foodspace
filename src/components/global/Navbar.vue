<template>
  <div>
      <!-- sidebar -->
      <nav id="sidebar" class="lg:block w-64 absolute inset-y-0 top-0 bg-white transform -translate-x-full
        transition duration-200 ease-in-out lg:relative lg:-translate-x-0 z-50 
      ">
          <div>
              <h1 class="font-bold uppercase p-4 border-b border-gray-100">
                  <span class="hover:text-gray-700">Food Space</span>
              </h1>
          </div>
          <ul class="text-sm mt-5 ml-2">
                <li v-for="link in links" :key="link.id">
                    <router-link :to="link.path" class="flex space-x-4 p-4 mb-1 link-hover">
                        <span v-html="link.icon"></span>
                        <span>{{ link.name }}</span>
                    </router-link>
                </li>
          </ul>
      </nav>

        <!-- mobile navbar -->
        <div class="lg:hidden flex justify-between">
            <!-- logo -->
            <div>
                <h1 class="font-bold uppercase p-4">
                    <span class="hover:text-gray-700">Food Space</span>
                </h1>
            </div>

            <button class="p-4 focus:outline-none" @click="resbar">
                <span v-html="muneIcon"></span>
            </button>
        </div>
  </div>
</template>

<script>
export default {
    name: "Navbar",
    methods:{
        resbar(){
            document.getElementById("sidebar").classList.toggle("-translate-x-full")
        }
    },
    data(){
        return{
            links:[
                {
                    id:1, 
                    name:"Home", 
                    path:"/",
                    icon: `
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    `
                },
                {
                    id:2, 
                    name:"About", 
                    path:"/about",
                    icon: `
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    `
                },
                {
                    id:3, 
                    name:"Contact", 
                    path:"/contact",
                    icon: `
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    `
                }
            ],
            muneIcon:`
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            `
        }
    }

}
</script>

<style>

</style>