import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import router from "./router";
import PrimeVue from 'primevue/config';
import { MyPreset } from '@assets/themes/my-preset.ts'

createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: MyPreset,
            options: {
                prefix: 'p',
                darkModeSelector: '',
                cssLayer: false
            }
        }
    })
    .use(router)
    .mount('#app')
