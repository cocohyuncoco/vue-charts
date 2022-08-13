<template>
    <div>
        <canvas ref="BarChart" width="400" height="400"></canvas>
    </div>
</template>

<script>


export default {   
    props: ['propsdata'], 
    mounted() {
        // const ctx = this.$refs.BarChart;
        const BarChart = new this.$_Chart(this.$refs.BarChart, {

            // 밑 속성들은 chart.js에서 제공하는 속성이지 vue 속성 아님
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: this.propsdata
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    },
    onclick: function(){
        this.$emit('refresh:chart');
    }
};
</script>

<style lang="scss" scoped>

</style>
