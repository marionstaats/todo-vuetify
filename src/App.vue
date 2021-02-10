<template>
  <v-app>
    <Navbar />
    <v-main class="px-4 pb-4 grey lighten-2">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',

  components: { Navbar},
  data: () => ({
    //
  }),
};
</script>
