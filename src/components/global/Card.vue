<template>
  <div class="card">
      <img :src="src" :alt="alt" class="w-full h-32 sm:48 object-cover">
      <div class="m-4">
          <span class="font-bold">{{ title }}</span>
          <span class="block text-gray-500 text-sm">{{ content }}</span>
      </div>
      <div class="badge">
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
    ]
}
</script>

<style>

</style>