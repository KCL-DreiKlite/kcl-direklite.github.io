<script setup lang="ts">
import Image from 'primevue/image';
import myComputerImageUrl from '@img/my-computer-cropped.png';
import { PrimeIcons } from "@primevue/core";


</script>

<template>
  <div class="flex flex-col items-center justify-center p-2 w-full" style="height: var(--router-view-height)">
    <div class="flex gap-3 items-center" style="width: 80vw">
      <Image class="basis-1/4">
        <template #image>
          <img :src="myComputerImageUrl" alt="my computer" class="shadow-2xl rounded-2xl"/>
        </template>
      </Image>
      <div class="flex flex-col justify-center basis-3/4 gap-3">
        <div>
          <div class="text-2xl font-bold italic pb-1">
            Hallo! Ich bin Klite.
          </div>
          <div class="text-xl italic font-bold">
            Jetzt lerne ich Detusch und möchte ich nach Deutsch.
          </div>
        </div>
        <div>
          嗨，我是 Klite Kuo，畢業於國立台北科技大學資訊工程系。現任職於某科技公司軟體設計工程師和某餐飲集團兼職服務員（aka
          端盤子 master）。目標是定居德國並在那邊工作，因此現在也有在學德文，目前先以考過 Goethe A1 為目標。
        </div>
        <div>
          這個網站主要是讓我自己學習寫網頁用的，順便當作一個便宜簡單的部落格（畢竟 GitHub Pages
          不用錢），用來存放我自己的一些筆記或心得分享。程式碼可以點擊頁面上方的 GitHub 按鈕，或按<a
            href="https://github.com/KCL-DreiKlite/kcl-dreiklite.github.io" target="_blank"><u
            class="text-blue-600">這裡</u></a>查看。
        </div>
        <div>
          如果您對我寫的文章沒有興趣的話也可以把這個網站當作一個簡易非正式的履歷。總之就是想到什麼寫什麼，純粹就是一個放飛自我的空間。
        </div>
        <div>
          <i :class="PrimeIcons.CARET_LEFT" class="mr-1" />這是我組的電腦
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>