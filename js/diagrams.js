// import Chart from './node_modules/chart.js/auto/auto.js';



const ctx = document.getElementById('myChart')

const diagram = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        datasets: [{
            label: '# of votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})
