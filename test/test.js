// Basic tests for Beaned-Charts
const { BarChart, LineChart, PieChart, getColor, normalizeCoordinate } = require('../index.js');

console.log('🧪 Running Beaned-Charts Tests...\n');

// Test utilities
function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
  } catch (error) {
    console.log(`❌ ${name}: ${error.message}`);
  }
}

function assertEqual(actual, expected, message = '') {
  if (actual !== expected) {
    throw new Error(`Expected ${expected}, got ${actual}. ${message}`);
  }
}

// Test getColor utility
test('getColor cycles through colors', () => {
  assertEqual(getColor(0), '#3b82f6');
  assertEqual(getColor(1), '#ef4444');
  assertEqual(getColor(8), '#3b82f6'); // Should cycle back
});

// Test normalizeCoordinate
test('normalizeCoordinate maps values correctly', () => {
  const result = normalizeCoordinate(50, 0, 100, 0, 200);
  assertEqual(result, 100);
});

// Test BarChart
test('BarChart renders SVG', () => {
  const data = [{ label: 'A', value: 10 }, { label: 'B', value: 20 }];
  const chart = new BarChart(data, { width: 200, height: 150 });
  const svg = chart.render();
  
  if (!svg.includes('<svg')) throw new Error('Missing SVG tag');
  if (!svg.includes('<rect')) throw new Error('Missing rect elements');
});

// Test LineChart
test('LineChart renders SVG', () => {
  const data = [{ value: 10 }, { value: 20 }, { value: 15 }];
  const chart = new LineChart(data, { width: 200, height: 150 });
  const svg = chart.render();
  
  if (!svg.includes('<svg')) throw new Error('Missing SVG tag');
  if (!svg.includes('<path')) throw new Error('Missing path element');
});

// Test PieChart
test('PieChart renders SVG', () => {
  const data = [{ value: 30 }, { value: 70 }];
  const chart = new PieChart(data, { width: 200, height: 200 });
  const svg = chart.render();
  
  if (!svg.includes('<svg')) throw new Error('Missing SVG tag');
  if (!svg.includes('<path')) throw new Error('Missing path elements');
});

// Test PieChart with hole (donut)
test('PieChart renders donut', () => {
  const data = [{ value: 30 }, { value: 70 }];
  const chart = new PieChart(data, { width: 200, height: 200, holeSize: 0.5 });
  const svg = chart.render();
  
  if (!svg.includes('<svg')) throw new Error('Missing SVG tag');
  if (!svg.includes('<path')) throw new Error('Missing path elements');
});

console.log('\n🎉 All tests completed!');
