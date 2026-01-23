# 🫘 Beaned-Charts

Minimalist, zero-dependency SVG chart library for modern web applications. Generate beautiful, responsive charts with pure JavaScript - no frameworks required!

## ✨ Features

- **Zero Dependencies** - Pure JavaScript, no external libraries
- **Lightweight** - Under 5KB gzipped
- **Responsive** - SVG-based, scales perfectly
- **TypeScript Support** - Full type definitions included
- **Modern Design** - Clean, minimalist aesthetic
- **Easy to Use** - Simple API, get started in seconds
- **Interactive** - Rich hover effects, tooltips, and animations
- **Customizable** - Extensive options for colors, styles, and behaviors

## 📦 Installation

```bash
npm install beaned-charts
```

## 🚀 Quick Start

### Simple API (Zero Dependencies)

```javascript
const { BarChart, LineChart, PieChart } = require('beaned-charts');

// Bar Chart
const barChart = new BarChart([
  { label: 'Jan', value: 120 },
  { label: 'Feb', value: 190 },
  { label: 'Mar', value: 300 }
], { width: 400, height: 250 });

document.body.innerHTML += barChart.render();
```

### React-Style API (Enhanced Features)

```javascript
const { ReactChartComponents } = require('beaned-charts');

// Multi-Series Area Chart
const areaChart = ReactChartComponents.createAreaChart(data, {
  width: 800,
  height: 400
});

// Enhanced Bar Chart  
const barChart = ReactChartComponents.createBarChart(data, {
  width: 600,
  height: 350
});

// Smooth Line Chart
const lineChart = ReactChartComponents.createLineChart(data, {
  width: 600,
  height: 300,
  smooth: true
});
```

**Choose Your API:**
- **Simple API** - Perfect for basic charts, maximum performance
- **React-Style API** - Modern features, gradients, enhanced interactions

## 📊 Chart Types

### Bar Chart

Perfect for comparing categorical data with automatic scaling and interactive hover effects.

```javascript
const chart = new BarChart(data, {
  width: 500,
  height: 300,
  padding: 40,
  showLabels: true,
  barSpacing: 0.2,
  colors: ['#3b82f6', '#ef4444', '#10b981'],
  showTooltips: true,    // Show tooltips on hover
  hoverEffects: true     // Enable hover animations
});
```

**Options:**
- `width` (number) - Chart width in pixels
- `height` (number) - Chart height in pixels  
- `padding` (number) - Padding around chart (default: 40)
- `showLabels` (boolean) - Show value/axis labels (default: true)
- `barSpacing` (number) - Spacing between bars 0-1 (default: 0.2)
- `colors` (string[]) - Custom color palette
- `showTooltips` (boolean) - Show tooltips on hover (default: true)
- `hoverEffects` (boolean) - Enable hover animations (default: true)

**Interactive Features:**
- 🖱️ **Hover Effects** - Bars lift and show shadows on hover
- 💬 **Tooltips** - Display label and value on hover
- 📊 **Value Labels** - Show values above bars on hover
- ✨ **Smooth Animations** - CSS transitions for all interactions

### Line Chart

Ideal for showing trends over time with optional smoothing, area fills, and interactive data points.

```javascript
const chart = new LineChart(data, {
  width: 500,
  height: 300,
  smooth: true,
  fill: true,
  color: '#10b981',
  showPoints: true,
  showTooltips: true,        // Show tooltips on hover
  hoverEffects: true,        // Enable hover animations
  showAreaHighlight: true   // Show area highlights on hover
});
```

**Options:**
- `width` (number) - Chart width in pixels
- `height` (number) - Chart height in pixels
- `padding` (number) - Padding around chart (default: 40)
- `smooth` (boolean) - Use curved lines (default: false)
- `fill` (boolean) - Fill area under line (default: false)
- `color` (string) - Line color
- `showPoints` (boolean) - Show data points (default: true)
- `showTooltips` (boolean) - Show tooltips on hover (default: true)
- `hoverEffects` (boolean) - Enable hover animations (default: true)
- `showAreaHighlight` (boolean) - Show area highlights (default: true)

**Interactive Features:**
- 🎯 **Data Points** - Interactive points that grow on hover
- 📈 **Line Highlight** - Line thickens and glows on hover
- 📍 **Guide Lines** - Vertical guides appear on hover
- 💬 **Tooltips** - Show point values and indices
- 🌟 **Area Highlights** - Highlight chart areas on hover

### Pie Chart

Great for showing proportional data with donut chart support and interactive slice effects.

```javascript
const chart = new PieChart(data, {
  width: 400,
  height: 400,
  holeSize: 0.3,  // 0 = pie, 0.3 = donut
  showLabels: true,
  showTooltips: true,     // Show tooltips on hover
  hoverEffects: true,     // Enable hover animations
  explodeSlices: true     // Explode slices on hover
});
```

**Options:**
- `width` (number) - Chart width in pixels
- `height` (number) - Chart height in pixels
- `holeSize` (number) - Donut hole size 0-1 (default: 0)
- `showLabels` (boolean) - Show percentage labels (default: true)
- `colors` (string[]) - Custom color palette
- `showTooltips` (boolean) - Show tooltips on hover (default: true)
- `hoverEffects` (boolean) - Enable hover animations (default: true)
- `explodeSlices` (boolean) - Explode slices on hover (default: false)

**Interactive Features:**
- 🥧 **Slice Effects** - Slices glow and expand on hover
- 💥 **Exploding Slices** - Slices pop out when hovered (optional)
- 💬 **Enhanced Tooltips** - Show labels, values, and percentages
- 🎯 **Center Labels** - For donut charts, show data in center on hover
- ✨ **Smooth Transitions** - CSS animations for all interactions

## 🎨 Data Format

All charts accept an array of data points:

```javascript
const data = [
  { label: 'Category A', value: 100 },  // label is optional
  { value: 75 },
  { label: 'Category C', value: 150 }
];
```

## 🛠️ Utilities

Access low-level utilities for custom implementations:

```javascript
const { getColor, normalizeCoordinate, describeArc, SVGFactory } = require('beaned-charts');

// Get color from palette
getColor(0); // '#3b82f6'

// Map values to coordinate system  
normalizeCoordinate(50, 0, 100, 0, 200); // 100

// Create SVG arc paths
describeArc(50, 50, 40, 0, 90); // SVG path string

// SVG helper methods
SVGFactory.createSVG(400, 300);
SVGFactory.createGroup({ stroke: '#000' });
```

## 📚 Documentation

- **[README.md](./README.md)** - Basic getting started guide
- **[styled-charts.md](./styled-charts.md)** - Comprehensive React-style API documentation
- **[react-test.md](./react-test.md)** - React integration examples
- **[react-demo.js](./react-demo.js)** - Complete React-style demo

## 🎯 Choose Your API

### Simple API (Maximum Performance)
```javascript
const { BarChart, LineChart, PieChart } = require('beaned-charts');
const chart = new BarChart(data, options);
```

### React-Style API (Enhanced Features)
```javascript
const { ReactChartComponents } = require('beaned-charts');
const chart = ReactChartComponents.createAreaChart(data, options);
```

See [styled-charts.md](./styled-charts.md) for detailed React-style API documentation.

Beaned-Charts works in all modern browsers that support SVG:
- Chrome 4+
- Firefox 3.5+
- Safari 3.2+
- Edge 12+
- IE 9+

## 📄 License

MIT License - feel free to use in commercial projects!

## 🤝 Contributing

Contributions welcome! Please read the contributing guidelines and submit pull requests.

---

**Beaned-Charts** - Simple. Beautiful. Charts. 🚀