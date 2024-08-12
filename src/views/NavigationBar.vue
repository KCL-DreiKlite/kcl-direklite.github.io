<script setup lang="ts">
import Menubar from "primevue/menubar";
import { MenuItem } from "primevue/menuitem";
import 'primeicons/primeicons.css'
import { PrimeIcons } from "@primevue/core";

const items: MenuItem[] = [
  {
    label: "關於我",
    route: "/about",
    icon: PrimeIcons.QUESTION_CIRCLE

  },
  {
    label: "文章列表",
    route: "/posts",
    icon: PrimeIcons.ALIGN_LEFT
  },
  {
    label: "Github",
    url: "https://github.com/KCL-DreiKlite/kcl-dreiklite.github.io",
    icon: PrimeIcons.GITHUB
  }
];

</script>

<template>
  <Menubar id="top-menu-bar" :model="items" class="Menubar-Root">
    <template #start>
      <RouterLink to="/">
        <img src="@img/avatar/universal_avatar.png" alt="avatar from Klite Kuo" class="w-10 rounded-full m-2"/>
      </RouterLink>
    </template>
    <template #item="{ item, props, hasSubmenu }">
      <RouterLink v-if="item.route || hasSubmenu" v-slot="{ href, navigate }" :to="item.route" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span v-if="item.icon" v-bind="props.icon" class="!text-2xl"/>
          <span>{{ item.label }}</span>
          <i v-if="hasSubmenu" :class="PrimeIcons.CHEVRON_DOWN"/>
        </a>
      </RouterLink>
      <a v-else :href="item.url" v-bind="props.action" target="_blank">
        <span v-if="item.icon" v-bind="props.icon" class="!text-2xl"/>
        <span>{{ item.label }}</span>
        <span :class="PrimeIcons.EXTERNAL_LINK" v-bind="props.icon"/>
        <i v-if="hasSubmenu" :class="PrimeIcons.CHEVRON_DOWN"/>
      </a>
    </template>
  </Menubar>

</template>

<style scoped>
.Menubar-Root {
  height: var(--navbar-height);
  border-width: 0 !important;
}
</style>