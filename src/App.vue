<script setup lang="ts">
import NavigationBar from "@views/NavigationBar.vue";

</script>

<template>
  <div id="root" class="w-screen min-h-screen relative">
    <NavigationBar />
    <RouterView v-slot="{ Component }" class="p-1">
      <Component :is="Component" class="w-full h-full"/>
    </RouterView>
  </div>
</template>

<style scoped>


</style>
