<template>
  <!-- content wrapper -->
  <div class="lg:flex relative">
    <Navbar />
    <main class="md:px-16 px-3 py-10 bg-gray-100 w-full">
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
