// React-style API Demo for Beaned-Charts
// Shows modern, Recharts-like usage while maintaining zero dependencies

const { ReactChartComponents } = require('./index.js');

console.log('🚀 Beaned-Charts React-Style API Demo\n');

// Sample data for multi-series area chart
const chartData = [
  { date: "2024-01-01", desktop: 222, mobile: 150 },
  { date: "2024-01-02", desktop: 97, mobile: 180 },
  { date: "2024-01-03", desktop: 167, mobile: 120 },
  { date: "2024-01-04", desktop: 242, mobile: 260 },
  { date: "2024-01-05", desktop: 373, mobile: 290 },
  { date: "2024-01-06", desktop: 301, mobile: 340 },
  { date: "2024-01-07", desktop: 245, mobile: 180 },
  { date: "2024-01-08", desktop: 409, mobile: 320 },
  { date: "2024-01-09", desktop: 59, mobile: 110 },
  { date: "2024-01-10", desktop: 261, mobile: 190 },
  { date: "2024-01-11", desktop: 327, mobile: 350 },
  { date: "2024-01-12", desktop: 292, mobile: 210 },
  { date: "2024-01-13", desktop: 138, mobile: 230 },
  { date: "2024-01-14", desktop: 387, mobile: 290 },
  { date: "2024-01-15", desktop: 120, mobile: 170 },
  { date: "2024-01-16", desktop: 138, mobile: 190 },
  { date: "2024-01-17", desktop: 446, mobile: 360 },
  { date: "2024-01-18", desktop: 364, mobile: 410 },
  { date: "2024-01-19", desktop: 247, mobile: 180 },
  { date: "2024-01-20", desktop: 89, mobile: 150 },
  { date: "2024-01-21", desktop: 227, mobile: 170 },
  { date: "2024-01-22", desktop: 138, mobile: 230 },
  { date: "2024-01-23", desktop: 383, mobile: 420 },
  { date: "2024-01-24", desktop: 122, mobile: 180 },
  { date: "2024-01-25", desktop: 315, mobile: 240 },
  { date: "2024-01-26", desktop: 149, mobile: 200 },
  { date: "2024-01-27", desktop: 383, mobile: 290 },
  { date: "2024-01-28", desktop: 470, mobile: 490 },
  { date: "2024-01-29", desktop: 103, mobile: 160 },
  { date: "2024-01-30", desktop: 342, mobile: 280 },
  { date: "2024-01-31", desktop: 178, mobile: 230 },
  { date: "2024-02-01", desktop: 165, mobile: 220 },
  { date: "2024-02-02", desktop: 293, mobile: 310 },
  { date: "2024-02-03", desktop: 247, mobile: 190 },
  { date: "2024-02-04", desktop: 385, mobile: 420 },
  { date: "2024-02-05", desktop: 481, mobile: 390 },
  { date: "2024-02-06", desktop: 498, mobile: 520 },
  { date: "2024-02-07", desktop: 388, mobile: 300 },
  { date: "2024-02-08", desktop: 149, mobile: 210 },
  { date: "2024-02-09", desktop: 103, mobile: 160 },
  { date: "2024-02-10", desktop: 293, mobile: 330 },
  { date: "2024-02-11", desktop: 335, mobile: 270 },
  { date: "2024-02-12", desktop: 197, mobile: 240 },
  { date: "2024-02-13", desktop: 197, mobile: 160 },
  { date: "2024-02-14", desktop: 448, mobile: 490 },
  { date: "2024-02-15", desktop: 473, mobile: 380 },
  { date: "2024-02-16", desktop: 338, mobile: 400 },
  { date: "2024-02-17", desktop: 81, mobile: 120 },
  { date: "2024-02-18", desktop: 385, mobile: 420 },
  { date: "2024-02-19", desktop: 235, mobile: 180 },
  { date: "2024-02-20", desktop: 177, mobile: 230 },
  { date: "2024-02-21", desktop: 82, mobile: 140 },
  { date: "2024-02-22", desktop: 81, mobile: 120 },
  { date: "2024-02-23", desktop: 252, mobile: 290 },
  { date: "2024-02-24", desktop: 294, mobile: 220 },
  { date: "2024-02-25", desktop: 201, mobile: 250 },
  { date: "2024-02-26", desktop: 213, mobile: 170 },
  { date: "2024-02-27", desktop: 420, mobile: 460 },
  { date: "2024-02-28", desktop: 233, mobile: 190 },
  { date: "2024-02-29", desktop: 78, mobile: 130 },
  { date: "2024-02-30", desktop: 340, mobile: 280 },
  { date: "2024-03-01", desktop: 178, mobile: 200 },
  { date: "2024-03-02", desktop: 293, mobile: 310 },
  { date: "2024-03-03", desktop: 247, mobile: 190 },
  { date: "2024-03-04", desktop: 385, mobile: 420 },
  { date: "2024-03-05", desktop: 481, mobile: 390 },
  { date: "2024-03-06", desktop: 498, mobile: 520 },
  { date: "2024-03-07", desktop: 388, mobile: 300 },
  { date: "2024-03-08", desktop: 149, mobile: 210 },
  { date: "2024-03-09", desktop: 103, mobile: 160 },
  { date: "2024-03-10", desktop: 293, mouse: 330 },
  { date: "2024-03-11", desktop: 335, mobile: 270 },
  { date: "2024-03-12", desktop: 197, mobile: 240 },
  { date: "2024-03-13", desktop: 197, mobile: 160 },
  { date: "2024-03-14", desktop: 448, mobile: 490 },
  { date: "2024-03-15", desktop: 473, mobile: 380 },
  { date: "2024-03-16", desktop: 338, mobile: 400 },
  { date: "2024-03-17", desktop: 81, mobile: 120 },
  { date: "2024-03-18", desktop: 385, mobile: 420 },
  { date: "2024-03-19", desktop: 235, mobile: 180 },
  { date: "2024-03-20", desktop: 177, mobile: 230 },
  { date: "2024-03-21", desktop: 82, mobile: 140 },
  { date: "2024-03-22", desktop: 81, mobile: 120 },
  { date: "2024-03-23", desktop: 252, mobile: 290 },
  { date: "2024-03-24", desktop: 294, mobile: 220 },
  { date: "2024-03-25", desktop: 201, mobile: 250 },
  { date: "2024-03-26", desktop: 213, mobile: 170 },
  { date: "2024-03-27", desktop: 420, mobile: 460 },
  { date: "2024-03-28", desktop: 233, mobile: 190 },
  { date: "2024-03-29", desktop: 78, mobile: 130 },
  { date: "2024-03-30", desktop: 340, mobile: 280 },
  { date: "2024-03-31", desktop: 178, mobile: 230 }
];

console.log('\n📊 React-Style Area Chart:');
console.log('Modern, multi-series area chart with gradients and tooltips');
const areaChart = ReactChartComponents.createAreaChart(chartData, {
  width: 800,
  height: 400
});
console.log(areaChart);

console.log('\n📈 React-Style Bar Chart:');
console.log('Enhanced bar chart with modern styling');
const barData = [
  { label: 'Product A', value: 120 },
  { label: 'Product B', value: 190 },
  { label: 'Product C', value: 300 },
  { label: 'Product D', value: 250 },
  { label: 'Product E', value: 420 }
];
const barChart = ReactChartComponents.createBarChart(barData, {
  width: 600,
  height: 350
});
console.log(barChart);

console.log('\n📉 React-Style Line Chart:');
console.log('Smooth line chart with enhanced data points');
const lineData = [
  { value: 30 },
  { value: 45 },
  { value: 35 },
  { value: 50 },
  { value: 65 },
  { value: 40 },
  { value: 55 }
];
const lineChart = ReactChartComponents.createLineChart(lineData, {
  width: 600,
  height: 300,
  smooth: true,
  color: '#10b981'
});
console.log(lineChart);

console.log('\n✨ React-Style API Features:');
console.log('• Multi-series area charts with gradients');
console.log('• Modern tooltips with backdrop blur');
console.log('• Smooth cubic-bezier animations');
console.log('• Professional grid lines and axes');
console.log('• Enhanced data points with hover effects');
console.log('• Responsive design with proper margins');
console.log('• Zero dependencies - pure SVG output');

console.log('\n🎯 Usage in React:');
console.log('const { ReactChartComponents } = require("beaned-charts");');
console.log('const chart = ReactChartComponents.createAreaChart(data, options);');
console.log('document.body.innerHTML += chart;');

console.log('\n✅ Demo complete! Copy any SVG above to use in your HTML.');
console.log('🚀 Beaned-Charts now provides both simple and React-style APIs!');
console.log('💡 Choose the API that fits your project needs!');
