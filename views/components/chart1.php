<div class="chart-container">
        <canvas id="myChart11"></canvas>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <script>
        var ctx = document.getElementById('myChart11')
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['January', 'Febuary', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: ['Revenue'],
                    data: [10000, 18000, 29000, 37000,50000, 59500],
                    backgroundColor: [
                        'rgb(62, 2, 131)',
                    ],
                    borderColor: [
                        "rgb(1, 3, 31)"
                    ],
                    borderWidth: 1
                },{
                    label: ['Lost'],
                    data: [4000, 11000, 20000, 27000,32000, 30500],
                    backgroundColor: [
                        'rgb(158, 91, 235)',
                    ],
                    borderColor: [
                        "rgb(1, 3, 31)"
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
    </script>