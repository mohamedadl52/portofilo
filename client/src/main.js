import { createApp } from 'vue'
import router from './router/index'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import './style.css'
import createStore from './store/index'
import App from './App.vue'
import  'aos/dist/aos.css'


createApp(App)
.use(router)
.use(createStore)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')