window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};
		let rodadas = 0;
		var MONTHS = ['1'];
		var config = {
			type: 'line',
			data: {
				datasets: [{
					label: 'Batidas',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [0],
					fill: false,
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Evolução da AI'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Geração'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}]
				}
			}
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};

		
		var colorNames = Object.keys(window.chartColors);
		

		function addInfo(num) {
			rodadas++;
			if (config.data.datasets.length > 0) {
				var month = MONTHS[config.data.labels.length % MONTHS.length];
				config.data.labels.push(rodadas);

				config.data.datasets.forEach(function(dataset) {
					dataset.data.push(num);
				});

				window.myLine.update();
			}
		}

