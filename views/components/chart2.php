<div class="chart-container1 col-6 col-lg-12 mx-auto" style="height:70%;">
    <canvas id="myChart2"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
        const ctx1 = document.getElementById('myChart2').getContext('2d');
        const myChart2 = new Chart(ctx1, {
            type: 'pie',
            data: {
                labels: ['Alpha', 'Beta', 'Gamma', 'Delta'],
                datasets: [{
                    label: ['Lost'],
                    data: [10000, 41000, 20000, 17000],
                    backgroundColor: [
                        'rgb(45, 3, 94)',
                        'rgb(243, 189, 13)',
                        'rgb(53, 170, 7)',
                        'rgb(137, 7, 170)'
                    ],
                    borderColor: [
                        "rgb(248, 248, 248)"
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        // const chart2 = new Chart (ctx1, {
        //     type: 'doughnut',
        //     data: data,
        // });


        // const data = {
        //     labels: [
        //         'Red',
        //         'Blue',
        //         'Yellow'
        //     ],
        //     datasets: [{
        //         label: 'My First Dataset',
        //         data: [300, 50, 100],
        //         backgroundColor: [
        //         'rgb(255, 99, 132)',
        //         'rgb(54, 162, 235)',
        //         'rgb(255, 205, 86)'
        //         ],
        //         hoverOffset: 4
        //     }]
        // };
    </script>