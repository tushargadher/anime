import './assets/main.css'
import { createApp } from 'vue'
import router from './router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Store from './Store';

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(Store);
app.mount('#app')   
