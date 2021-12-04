<template>
  <!-- content wrapper -->
  <div class="flex justify-between">
    <Navbar class="hidden lg:block w-80"/>
    <main class="md:px-16 px-3 py-16 bg-gray-100 w-full">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/global/Navbar"

export default {
  components:{
    Navbar
  }
}
</script>

<style>


</style>
