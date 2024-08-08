<script setup lang="ts">
import Menubar from "primevue/menubar";
import { MenuItem } from "primevue/menuitem";
import 'primeicons/primeicons.css'
import {PrimeIcons} from "@primevue/core";

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
  <Menubar id="top-menu-bar" :model="items">
    <template #start>
      <router-link to="/">
        <img src="@img/avatar/universal_avatar.png" alt="avatar from Klite Kuo" class="w-10 rounded-full m-2"/>
      </router-link>
    </template>
    <template #item="{ item, props, hasSubmenu }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route">
        <a v-bind="props.action" :href="href" @click="navigate">
          <span v-if="item.icon" v-bind="props.icon" class="!text-2xl"/>
          <span>{{ item.label }}</span>
          <i v-if="hasSubmenu && item.submenu && item.submenu.length > 0"/>
        </a>
      </router-link>
      <a v-else :href="item.url" v-bind="props.action">
        <span v-if="item.icon" v-bind="props.icon" class="!text-2xl"/>
        <span>{{ item.label }}</span>
        <span :class="PrimeIcons.EXTERNAL_LINK"/>
      </a>
    </template>
  </Menubar>

</template>

<style scoped>

</style>