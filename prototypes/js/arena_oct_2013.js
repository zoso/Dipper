var arena_2013 = {
	chart: {
		type: 'area'
	},
	title: {
		text: 'Oversikt over de siste X måneders forbruk'
	},
	xAxis: {
		categories: [
			'desember', 'januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november'
		]
	},
	yAxis: {
		title: {
			text: ''
		}
	},
	plotOptions: {
		marker: {
			fillColor: '#FFFFFF',
            lineWidth: 2,
            lineColor: '#c00076' // inherit from series
		}
	},
    series: [
		{
			name: 'Data',
			data: [132, 15, 46, 59, 101, 67, 2, 77, 32, 22, 103, 23],
			/*lineWidth: 3,
			lineColor: '#e71e8d',*/

			marker: {
                symbol: 'circle'
            }
		},
		{
			name: 'Tale',
			data: [2, 84, 23, 14, 134, 42, 32, 43, 31, 63, 14, 51],
			marker: {
                symbol: 'circle'
            }
		},
		{
			name: 'SMS/MMS',
			data: [14, 0, 41, 11, 15, 34, 10, 46, 22, 19, 52, 40],
			marker: {
                symbol: 'circle'
            }
		}
	]
};