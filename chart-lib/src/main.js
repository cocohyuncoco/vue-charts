import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin.js'

Vue.config.productionTip = false

// install(); 속성 함수 실행
Vue.use(ChartPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
