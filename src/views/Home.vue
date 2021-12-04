<template>
  <div class="home">

    <div class="flex justify-center md:justify-end">
      <button class="text-primary">Log In</button>
      <button class="text-primary ml-2">Sign Up</button>
    </div>

    <header>
      <h2 class="text-gray-700 text-6xl font-semibold py-4">Recipes</h2>
      <h3 class="text-2xl font-semibold">For Homies</h3>
    </header>

    <div>
      <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Lastes Recipes</h4>

      <div class="mt-8 grid sm:gap-10 sm:grid-cols-3">
        <!-- cards go here -->
        <Card
          v-for="card in cards"
          :key="card.id"
          :title="card.title"
          :content="card.content"
          :src="card.src"
          :alt="card.alt"
          :time="card.time"
        />
      </div>

      <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

      <div class="mt-8">
        <!-- card go here -->
      </div>

      <div class="flex justify-center">
        <div class="bg-secondary-100 text-secondary-200">Load more</div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/global/Card";

export default {
  name: 'Home',
  components: {
    Card
  },
  data(){
    return {
      cards: [
        {
          id:1, 
          title: "5 Bean chilli stew", 
          content: "Recipe by Rasputin", 
          src: "img/stew.jpg", 
          alt: "stew", 
          time: "25 mins"
        },
        {
          id:2, 
          title: "Veg Nodles", 
          content: "Recipe by Rasputin", 
          src: "img/noodles.jpg", 
          alt: "noodles", 
          time: "30 mins"
        },
        {
          id:3, 
          title: "Tofu Curry", 
          content: "Recipe by Rasputin", 
          src: "img/curry.jpg", 
          alt: "curry", 
          time: "49 mins"
        },
      ]
    }
  }
}
</script>
