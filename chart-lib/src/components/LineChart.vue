<template>
    <div>
        <canvas ref="LineChart" id="LineChart" width="400" height="400"></canvas>
    </div>
</template>

<script>


export default {
    mounted() {       
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];
        const data = {
            labels: labels,
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        };
        const config = {
            type: 'line',
            data: data,
        };
        const LineChart = new this.$_Chart(
            // document.getElementById('LineChart'),
            this.$refs.LineChart,
            config
        );
    },
   
};
</script>

<style lang="scss" scoped>

</style>