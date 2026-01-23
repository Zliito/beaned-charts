# 🫘 Beaned-Charts + React Test Guide

This file contains complete examples for testing Beaned-Charts in React. Copy and paste these examples into your React project.

## 📦 Setup

First, install Beaned-Charts:

```bash
npm install beaned-charts
```

## 🚀 Method 1: Direct SVG Rendering

```jsx
// App.js
import React from 'react';
import { BarChart, LineChart, PieChart } from 'beaned-charts';

function App() {
  const barData = [
    { label: 'Jan', value: 120 },
    { label: 'Feb', value: 190 },
    { label: 'Mar', value: 300 },
    { label: 'Apr', value: 250 },
    { label: 'May', value: 420 }
  ];

  const lineData = [
    { value: 30 },
    { value: 45 },
    { value: 35 },
    { value: 50 },
    { value: 65 },
    { value: 40 },
    { value: 55 }
  ];

  const pieData = [
    { label: 'Product A', value: 35 },
    { label: 'Product B', value: 25 },
    { label: 'Product C', value: 20 },
    { label: 'Product D', value: 15 },
    { label: 'Product E', value: 5 }
  ];

  const barChart = new BarChart(barData, { 
    width: 400, 
    height: 250,
    colors: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6']
  });

  const lineChart = new LineChart(lineData, { 
    width: 400, 
    height: 250,
    smooth: true,
    fill: true,
    color: '#10b981'
  });

  const pieChart = new PieChart(pieData, { 
    width: 300, 
    height: 300,
    holeSize: 0.3
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🫘 Beaned-Charts React Demo</h1>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>📊 Bar Chart</h2>
        <div dangerouslySetInnerHTML={{ __html: barChart.render() }} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>📈 Line Chart</h2>
        <div dangerouslySetInnerHTML={{ __html: lineChart.render() }} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>🥧 Pie Chart (Donut)</h2>
        <div dangerouslySetInnerHTML={{ __html: pieChart.render() }} />
      </div>
    </div>
  );
}

export default App;
```

## 🎨 Method 2: Reusable Chart Component

```jsx
// components/Chart.jsx
import React from 'react';
import { BarChart, LineChart, PieChart } from 'beaned-charts';

function Chart({ type, data, options = {}, style = {} }) {
  const getChart = () => {
    switch (type) {
      case 'bar':
        return new BarChart(data, options);
      case 'line':
        return new LineChart(data, options);
      case 'pie':
        return new PieChart(data, options);
      default:
        throw new Error(`Unknown chart type: ${type}`);
    }
  };

  return (
    <div style={style}>
      <div dangerouslySetInnerHTML={{ __html: getChart().render() }} />
    </div>
  );
}

export default Chart;
```

```jsx
// App.jsx
import React from 'react';
import Chart from './components/Chart';

function App() {
  const salesData = [
    { label: 'Jan', value: 120 },
    { label: 'Feb', value: 190 },
    { label: 'Mar', value: 300 },
    { label: 'Apr', value: 250 },
    { label: 'May', value: 420 }
  ];

  const trendData = [
    { value: 30 },
    { value: 45 },
    { value: 35 },
    { value: 50 },
    { value: 65 },
    { value: 40 },
    { value: 55 }
  ];

  const categoryData = [
    { label: 'Product A', value: 35 },
    { label: 'Product B', value: 25 },
    { label: 'Product C', value: 20 },
    { label: 'Product D', value: 15 },
    { label: 'Product E', value: 5 }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🫘 Beaned-Charts React Demo</h1>
      
      <Chart
        type="bar"
        data={salesData}
        options={{
          width: 400,
          height: 250,
          colors: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6']
        }}
        style={{ marginBottom: '40px' }}
      />

      <Chart
        type="line"
        data={trendData}
        options={{
          width: 400,
          height: 250,
          smooth: true,
          fill: true,
          color: '#10b981'
        }}
        style={{ marginBottom: '40px' }}
      />

      <Chart
        type="pie"
        data={categoryData}
        options={{
          width: 300,
          height: 300,
          holeSize: 0.3
        }}
        style={{ marginBottom: '40px' }}
      />
    </div>
  );
}

export default App;
```

## 🔧 Method 3: Individual Chart Components

```jsx
// components/BarChart.jsx
import React from 'react';
import { BarChart } from 'beaned-charts';

function BarChartComponent({ data, ...options }) {
  const chart = new BarChart(data, options);
  return <div dangerouslySetInnerHTML={{ __html: chart.render() }} />;
}

export default BarChartComponent;
```

```jsx
// components/LineChart.jsx
import React from 'react';
import { LineChart } from 'beaned-charts';

function LineChartComponent({ data, ...options }) {
  const chart = new LineChart(data, options);
  return <div dangerouslySetInnerHTML={{ __html: chart.render() }} />;
}

export default LineChartComponent;
```

```jsx
// components/PieChart.jsx
import React from 'react';
import { PieChart } from 'beaned-charts';

function PieChartComponent({ data, ...options }) {
  const chart = new PieChart(data, options);
  return <div dangerouslySetInnerHTML={{ __html: chart.render() }} />;
}

export default PieChartComponent;
```

```jsx
// App.jsx
import React from 'react';
import BarChartComponent from './components/BarChart';
import LineChartComponent from './components/LineChart';
import PieChartComponent from './components/PieChart';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🫘 Beaned-Charts React Demo</h1>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>📊 Bar Chart</h2>
        <BarChartComponent
          data={[
            { label: 'Jan', value: 120 },
            { label: 'Feb', value: 190 },
            { label: 'Mar', value: 300 }
          ]}
          width={400}
          height={250}
          colors={['#3b82f6', '#ef4444', '#10b981']}
        />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>📈 Line Chart</h2>
        <LineChartComponent
          data={[{ value: 30 }, { value: 45 }, { value: 35 }, { value: 50 }]}
          width={400}
          height={250}
          smooth={true}
          fill={true}
          color="#10b981"
        />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>🥧 Pie Chart</h2>
        <PieChartComponent
          data={[
            { label: 'Product A', value: 35 },
            { label: 'Product B', value: 25 },
            { label: 'Product C', value: 40 }
          ]}
          width={300}
          height={300}
          holeSize={0.3}
        />
      </div>
    </div>
  );
}

export default App;
```

## 📝 TypeScript Version

```tsx
// components/Chart.tsx
import React from 'react';
import { BarChart, LineChart, PieChart, ChartDataPoint } from 'beaned-charts';

interface ChartProps {
  type: 'bar' | 'line' | 'pie';
  data: ChartDataPoint[];
  options?: any;
  style?: React.CSSProperties;
}

function Chart({ type, data, options = {}, style = {} }: ChartProps) {
  const getChart = () => {
    switch (type) {
      case 'bar':
        return new BarChart(data, options);
      case 'line':
        return new LineChart(data, options);
      case 'pie':
        return new PieChart(data, options);
      default:
        throw new Error(`Unknown chart type: ${type}`);
    }
  };

  return (
    <div style={style}>
      <div dangerouslySetInnerHTML={{ __html: getChart().render() }} />
    </div>
  );
}

export default Chart;
```

## 🧪 Quick Test

Create a minimal test file:

```jsx
// TestApp.jsx
import React from 'react';
import { BarChart } from 'beaned-charts';

function TestApp() {
  const data = [{ label: 'Test', value: 100 }];
  const chart = new BarChart(data, { width: 200, height: 150 });
  
  return (
    <div>
      <h1>Quick Test</h1>
      <div dangerouslySetInnerHTML={{ __html: chart.render() }} />
    </div>
  );
}

export default TestApp;
```

## 🎯 How to Test

1. **Create React App** (if you don't have one):
   ```bash
   npx create-react-app bean-charts-test
   cd bean-charts-test
   npm install bean-charts
   ```

2. **Replace App.js** with any of the examples above

3. **Start the dev server**:
   ```bash
   npm start
   ```

4. **Open http://localhost:3000** to see your charts!

## 🔥 Benefits

- ✅ **Zero Dependencies** - No charting library bloat
- ✅ **TypeScript Support** - Full autocomplete
- ✅ **SSR Friendly** - Works with Next.js, Gatsby
- ✅ **Fast Performance** - No virtual DOM overhead
- ✅ **Customizable** - Full control over styling
- ✅ **Responsive** - SVG scales perfectly

## 🚨 Note on dangerouslySetInnerHTML

Using `dangerouslySetInnerHTML` is safe here because:
- The SVG is generated by your own code
- No user input is being rendered
- SVG is inherently safe from XSS attacks

The charts are just static SVG strings - no scripts or unsafe content!

## 📦 About Beaned-Charts

Beaned-Charts is a minimalist SVG chart library designed for modern web applications. It generates pure SVG output that's perfect for React integration while maintaining zero dependencies and a tiny footprint.
