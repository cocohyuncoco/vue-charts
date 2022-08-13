import Chart from 'chart.js'

export default {

    install(Vue){
        console.log('chart plugin loaded');
        Vue.prototype.$_Chart = Chart;
        
        // 모든 컴포넌트에서 this.$_Chart; 하게 되면 접근


    }

}