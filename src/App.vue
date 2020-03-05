<template>
  <div id="restaurant-forum">
    <Navbar />
    <main role="main" class="mt-5 bg-white">
      <!-- 像 handlebars 的 view -->
      <router-view />
    </main>
  </div>
</template>

<script>
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
export default {
  name: "restaurant-forum",
  components: {
    Navbar
  }
}
</script>
