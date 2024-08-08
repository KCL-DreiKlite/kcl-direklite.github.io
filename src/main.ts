import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import router from "./router";
import PrimeVue from 'primevue/config';
import { MyTheme } from '@assets/themes/my-theme.ts'

createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: MyTheme,
            options: {
                prefix: 'p',
                cssLayer: false
            }
        }
    })
    .use(router)
    .mount('#app')
