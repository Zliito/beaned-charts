// Beaned-Charts Quick Start Demo
// Run with: node demo.js

const { BarChart, LineChart, PieChart } = require('./index.js');

console.log('🫘 Beaned-Charts Interactive Demo\n');

// Bar Chart Example with Enhanced Interactivity
console.log('📊 Interactive Bar Chart:');
const barData = [
  { label: 'Jan', value: 120 },
  { label: 'Feb', value: 190 },
  { label: 'Mar', value: 300 },
  { label: 'Apr', value: 250 },
  { label: 'May', value: 420 }
];

const barChart = new BarChart(barData, { 
  width: 500, 
  height: 300,
  colors: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'],
  showTooltips: true,
  hoverEffects: true
});
console.log(barChart.render());

console.log('\n📈 Interactive Line Chart:');
// Line Chart Example with Enhanced Interactivity
const lineData = [
  { value: 30 },
  { value: 45 },
  { value: 35 },
  { value: 50 },
  { value: 65 },
  { value: 40 },
  { value: 55 }
];

const lineChart = new LineChart(lineData, { 
  width: 500, 
  height: 300,
  smooth: true,
  fill: true,
  color: '#10b981',
  showTooltips: true,
  hoverEffects: true,
  showAreaHighlight: true
});
console.log(lineChart.render());

console.log('\n🥧 Interactive Pie Chart (Donut):');
// Pie Chart Example with Enhanced Interactivity
const pieData = [
  { label: 'Product A', value: 35 },
  { label: 'Product B', value: 25 },
  { label: 'Product C', value: 20 },
  { label: 'Product D', value: 15 },
  { label: 'Product E', value: 5 }
];

const pieChart = new PieChart(pieData, { 
  width: 400, 
  height: 400,
  holeSize: 0.3, // Donut chart
  showTooltips: true,
  hoverEffects: true,
  explodeSlices: true
});
console.log(pieChart.render());

console.log('\n✨ Enhanced UI Features:');
console.log('• Professional tooltips with backdrop blur');
console.log('• Smooth cubic-bezier animations');
console.log('• Enhanced drop shadows and glows');
console.log('• Better typography and spacing');
console.log('• Improved color contrast');
console.log('• Rounded corners and modern styling');
console.log('• Responsive hover states');
console.log('\n🎨 Visual Improvements:');
console.log('• Dark tooltips with subtle borders');
console.log('• Enhanced shadows and depth effects');
console.log('• Professional typography hierarchy');
console.log('• Smooth transitions and micro-interactions');
console.log('• Better color accessibility');
console.log('\n✅ Demo complete! Copy any SVG above to use in your HTML.');
console.log('🎯 Try hovering over different elements to see the enhanced UI!');
console.log('💡 Notice the improved tooltips, animations, and visual polish.');
