<template>
  <div>
    <h1>chart.js</h1>
    <bar-chart></bar-chart>
    <doughnut-charts></doughnut-charts>
    <line-chart></line-chart>  
    <polar-area></polar-area>  
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue'
import DoughnutCharts from './components/DoughnutCharts.vue'
import LineChart from './components/LineChart.vue'
import PolarArea from './components/PolarArea.vue'

export default {
  // 컴포넌트 속성 && 인스턴스 옵션
 components:{
    BarChart,
    DoughnutCharts,
    LineChart,
    PolarArea
 }
};
</script>

<style lang="scss" scoped>

</style>