import Plotly from './plotly_custom.js';

var x = Array.from({length: 20000}, () => Math.random()*(6-3)+3);
var y = Array.from({length: 20000}, () => Math.random()*(6-3)+3);

var data = [{
  x: x,
  y: y,
  type: 'scattergl',
  mode: 'markers',
  marker: {
    color: 'rgba(17, 157, 255,0.5)',
    size: 5,
    line: {
      color: 'rgb(231, 99, 250)',
      width: 2
    }
  },
  showlegend: false
}]

console.time("Plotly");
Plotly.plot('graph', data)
console.timeEnd("Plotly");