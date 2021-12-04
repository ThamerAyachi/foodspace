<template>
  <div>
      <nav>
          <div>
              <h1 class="font-bold uppercase p-4 border-b border-gray-100">
                  <span>Food Space</span>
              </h1>
          </div>
          <ul>
                <li v-for="link in links" :key="link.id">
                    <router-link :to="link.path">
                        <span>{{ link.name }}</span>
                    </router-link>
                </li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
    name: "Navbar",
    data(){
        return{
            links:[
                {id:1, name:"Home", path:"/"},
                {id:2, name:"About", path:"/about"},
                {id:3, name:"Contact", path:"/contact"}
            ]
        }
    }

}
</script>

<style>

</style>