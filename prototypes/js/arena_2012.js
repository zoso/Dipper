var area_2012 = {
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
			data: [32, 13, 144, 55, 46, 33, 14, 25, 62, 62, 3, 23],
			/*lineWidth: 3,
			lineColor: '#e71e8d',*/

			marker: {
                symbol: 'circle'
            }
		},
		{
			name: 'Tale',
			data: [12, 14, 14, 11, 34, 42, 13, 41, 11, 13, 4, 12],
			marker: {
                symbol: 'circle'
            }
		},
		{
			name: 'SMS/MMS',
			data: [0, 4, 25, 11, 5, 4, 20, 40, 29, 29, 12, 20],
			marker: {
                symbol: 'circle'
            }
		}
	]
};