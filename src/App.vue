<script setup lang="ts">
import NavigationBar from "@views/NavigationBar.vue";

</script>

<template>
  <div id="root" class="flex flex-col w-screen h-screen relative">
    <NavigationBar/>
    <div class="flex-1 overflow-y-auto">
      <RouterView v-slot="{ Component }">
        <Component :is="Component" class=""/>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>

</style>
