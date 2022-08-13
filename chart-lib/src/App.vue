<template>
  <div>
    <h1>chart.js</h1>
    <TreeChart :json="treeData" />
    <div style="width:400px; display: flex;">
      <bar-chart v-bind:propsdata="chartDataSet" v-on:refresh:chart="refresh"></bar-chart>
      <doughnut-charts></doughnut-charts>
      <line-chart></line-chart>
      <polar-area></polar-area>
    </div>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue'
import DoughnutCharts from './components/DoughnutCharts.vue'
import LineChart from './components/LineChart.vue'
import PolarArea from './components/PolarArea.vue'
import TreeChart from "vue-tree-chart";

export default {
  // 컴포넌트 속성 && 인스턴스 옵션
 components:{
    BarChart,
    DoughnutCharts,
    LineChart,
    PolarArea,
    TreeChart
 },
 data(){
  return{
    treeData: {
      name: 'root',
      // image_url: "https://static.refined-x.com/avat.jpg",
      class: ["rootNode"],
      children: [
        {
          name: 'children1',
          // image_url: "https://static.refined-x.com/avat1.jpg"
        },
        {
          name: 'children2',
          // image_url: "https://static.refined-x.com/avat2.jpg",
          mate: {
            name: 'mate',
            // image_url: "https://static.refined-x.com/avat3.jpg"
          },
          children: [
            {
              name: 'grandchild',
              // image_url: "https://static.refined-x.com/avat.jpg"
            },
            {
              name: 'grandchild2',
              // image_url: "https://static.refined-x.com/avat1.jpg"
            },
            {
              name: 'grandchild3',
              // image_url: "https://static.refined-x.com/avat2.jpg"
            }
          ]
        },
        {
          name: 'children3',
          // image_url: "https://static.refined-x.com/avat.jpg"
        }
      ]
    },
    chartDataSet: [{
      label: '투표 결과',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }],
  }
 },
 methods: {  
   refresh(){
    this.chartDataSet = [10,20];
   }
 },
 created() {
    // axios.get('chart/line/1')
    //   .then(res => this.chartDataSet = res.data)
    //   .catch(error => console.log(error));
 },
 
};
</script>

<style lang="scss" scoped>

</style>