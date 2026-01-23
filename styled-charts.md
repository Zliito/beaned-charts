# 🎨 Styled Charts Documentation

## 📊 React-Style API Overview

Beaned-Charts now provides two distinct APIs to suit different needs:

### 🚀 **Simple API** - Maximum Performance
Perfect for:
- Basic charting needs
- Performance-critical applications
- Minimal bundle size requirements
- Server-side rendering

### 🎨 **React-Style API** - Enhanced Features
Perfect for:
- Modern web applications
- Interactive dashboards
- Rich user experiences
- Data visualization with advanced features

---

## 📈 **Area Chart (Multi-Series)**

### Features
- **Multi-Series Support** - Desktop and mobile visitor data
- **Gradient Fills** - Beautiful linear gradients
- **Interactive Tooltips** - Dark tooltips with backdrop blur
- **Grid Lines** - Professional background grid
- **Responsive Axes** - Smart date and value formatting
- **Smooth Animations** - Cubic-bezier transitions

### Usage
```javascript
const { ReactChartComponents } = require('beaned-charts');

const chartData = [
  { date: "2024-01-01", desktop: 222, mobile: 150 },
  { date: "2024-01-02", desktop: 97, mobile: 180 },
  // ... more data points
];

const areaChart = ReactChartComponents.createAreaChart(chartData, {
  width: 800,
  height: 400
});

document.body.innerHTML += areaChart;
```

### Output
- Clean SVG with semantic structure
- CSS animations and transitions
- Professional gradients and shadows
- Interactive tooltips with proper positioning

---

## 📊 **Enhanced Bar Chart**

### Features
- **Modern Styling** - Rounded corners, enhanced shadows
- **Hover Effects** - Scale and lift animations
- **Professional Tooltips** - Dark backgrounds with borders
- **Smooth Transitions** - Cubic-bezier easing
- **Responsive Design** - Proper spacing and layout

### Usage
```javascript
const barChart = ReactChartComponents.createBarChart(data, {
  width: 600,
  height: 350
});
```

### Output
- Bars with smooth hover animations
- Enhanced tooltips with backdrop blur
- Professional drop shadows and styling
- Modern visual hierarchy

---

## 📈 **Enhanced Line Chart**

### Features
- **Smooth Curves** - Natural cubic-bezier paths
- **Interactive Points** - Animated data points
- **Line Highlighting** - Professional hover effects
- **Guide Lines** - Animated vertical guides
- **Area Fills** - Optional area under lines

### Usage
```javascript
const lineChart = ReactChartComponents.createLineChart(data, {
  width: 600,
  height: 300,
  smooth: true,
  color: '#10b981'
});
```

### Output
- Smooth, natural curve animations
- Interactive data points with growth effects
- Professional line styling with round caps
- Enhanced tooltips and visual feedback

---

## 🎨 **Design System**

### Color Palette
- **Primary Colors**: Modern, accessible palette
- **Gradients**: Professional linear gradients
- **Shadows**: Multi-layered depth effects
- **Typography**: Clear hierarchy and readability

### Animations
- **Cubic-bezier**: Natural, professional timing
- **Micro-interactions**: Subtle hover states
- **Smooth Transitions**: 0.3s ease for all elements
- **Backdrop Effects**: Modern blur on tooltips

### Responsive Design
- **Flexible Sizing**: Any width/height combination
- **Smart Margins**: Professional spacing system
- **Adaptive Scaling**: Perfect for any screen size
- **Touch-Friendly**: Large interaction areas

---

## 🚀 **Performance Benefits**

### Zero Dependencies
- **Bundle Size**: Still under 8KB with enhanced features
- **Tree Shaking**: Only import what you need
- **No Runtime**: Pure SVG generation
- **SSR Compatible**: Works with Next.js, Gatsby

### Modern Features
- **CSS Animations**: Hardware-accelerated transitions
- **SVG Optimization**: Efficient path generation
- **Memory Efficient**: No heavy libraries loaded
- **Fast Rendering**: Direct DOM manipulation

---

## 📱 **Usage Examples**

### Dashboard Integration
```javascript
// Modern dashboard with multiple charts
import { ReactChartComponents } from 'beaned-charts';

function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Visitor Analytics</h2>
        <div dangerouslySetInnerHTML={{ 
          __html: ReactChartComponents.createAreaChart(visitorData, { width: 400, height: 250 })
        }} />
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
        <div dangerouslySetInnerHTML={{ 
          __html: ReactChartComponents.createBarChart(performanceData, { width: 400, height: 250 })
        }} />
      </div>
    </div>
  );
}
```

### Real-time Data
```javascript
// Live data streaming with smooth updates
function LiveChart({ data }) {
  const chartRef = useRef(null);
  
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.innerHTML = ReactChartComponents.createAreaChart(data, {
        width: 600,
        height: 300
      });
    }
  }, [data]);

  return <div ref={chartRef} />;
}
```

---

## 🎯 **Migration Guide**

### From Simple API
```javascript
// Before
const { BarChart } = require('beaned-charts');
const chart = new BarChart(data, options);

// After
const { ReactChartComponents } = require('beaned-charts');
const chart = ReactChartComponents.createBarChart(data, options);
```

### Benefits of React-Style API
- **Enhanced Interactions** - Tooltips, hover effects, animations
- **Modern Styling** - Gradients, shadows, professional design
- **Multi-Series Support** - Area charts with multiple data series
- **Better UX** - Responsive design, accessibility features

---

## 📚 **Comparison**

| Feature | Simple API | React-Style API |
|---------|-------------|------------------|
| Bundle Size | ~4KB | ~7KB |
| Dependencies | Zero | Zero |
| Performance | Maximum | High |
| Features | Basic | Enhanced |
| Animations | Simple | Professional |
| Tooltips | Basic | Advanced |
| Styling | Minimal | Modern |
| Use Case | Simple charts | Rich dashboards |

---

## 🔧 **Advanced Customization**

### Custom Styling
```javascript
// Override default styles with CSS
const chart = ReactChartComponents.createAreaChart(data, {
  width: 800,
  height: 400
});

// Add custom CSS
chart.style.cssText += `
  .chart-area { fill: url(#custom-gradient) !important; }
  .tooltip { background: rgba(59, 130, 246, 0.95) !important; }
`;
```

### Event Handling
```javascript
// Add custom event listeners
const chart = ReactChartComponents.createBarChart(data);
const container = document.createElement('div');
container.innerHTML = chart;

container.addEventListener('click', (e) => {
  const rect = e.target.closest('.bar-group');
  if (rect) {
    console.log('Bar clicked:', rect.dataset);
  }
});
```

---

## 🌟 **Best Practices**

### Performance
- Use the **Simple API** for maximum performance
- Use **React-Style API** for enhanced features
- Import only what you need: `const { createAreaChart } = require('beaned-charts')`
- Cache chart instances when data doesn't change

### Accessibility
- All charts include proper semantic structure
- High contrast colors and readable text
- Keyboard navigation support with proper ARIA labels
- Screen reader friendly with descriptive tooltips

### Responsive Design
- Use percentage-based sizing for flexible layouts
- Implement container queries for different screen sizes
- Test on mobile, tablet, and desktop viewports

---

## 🎉 **Conclusion**

Beaned-Charts provides the **best of both worlds**:
- **Simple API** when you need maximum performance
- **React-Style API** when you need enhanced features

Choose the API that fits your project requirements and enjoy professional-grade charts with zero dependencies! 🚀
