<template>
  <div class="card">
      <img :src="src" :alt="alt" class="w-full h-32 sm:48 object-cover">
      <div class="m-4">
          <span class="font-bold">{{ title }}</span>
          <span class="block text-gray-500 text-sm">{{ content }}</span>
      </div>
      <div class="badge">
          <span v-html="icon"></span>
          <span>
              {{ time }}
          </span>
      </div>
  </div>
</template>

<script>
export default {
    name: "Card",
    props:[
        "src",
        "alt",
        "title",
        "content",
        "time"
    ],
    data(){
        return{
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`
        }
    }
}
</script>

<style>

</style>