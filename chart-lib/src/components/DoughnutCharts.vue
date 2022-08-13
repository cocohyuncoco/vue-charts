<template>
    <div>
        <canvas id="DoughnutCharts" width="400" height="400"></canvas>
    </div>
</template>

<script>

export default {
 mounted() {
       const data = {
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }]
            };
            const config = {
            type: 'doughnut',
            data: data,
        };  
        const getElementById = new this.$_Chart(
            document.getElementById('DoughnutCharts'),
            config
        );
 },
 
};
</script>

<style lang="scss" scoped>

</style>