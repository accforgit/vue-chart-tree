import Vue from 'vue'
import ChartTree from '../test/chart-tree.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(ChartTree)
}).$mount('#app')
