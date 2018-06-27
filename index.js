var Plotly = require('./plotly_custom.js');

var data_lines = [{ 
	x: [0, 1],
	y: [0, 1]
}];
Plotly.plot("lines", data_lines);

var data_bar = [{
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: [20, 14, 23],
  type: 'bar'
}];
Plotly.newPlot('bar', data_bar);