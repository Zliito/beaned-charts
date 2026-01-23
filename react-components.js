// React-style API for Beaned-Charts
// Provides components similar to Recharts but with zero dependencies

class ReactChartComponents {
  static createAreaChart(data, options = {}) {
    const { width = 500, height = 300, margin = { top: 20, right: 30, bottom: 20, left: 50 } } = options;
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Create enhanced SVG with React-style structure
    let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
    
    // Add modern styling
    svg += `<style>
      .chart-area { 
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
        cursor: pointer;
      }
      .chart-area:hover { 
        filter: drop-shadow(0 2px 6px rgba(0,0,0,0.15));
      }
      .tooltip {
        opacity: 0;
        transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
        backdrop-filter: blur(4px);
      }
      .area-group:hover .tooltip {
        opacity: 1;
      }
      .grid-line { 
        stroke: #e5e7eb; 
        stroke-width: 1; 
        stroke-dasharray: 2,2; 
        opacity: 0.3;
      }
      .axis-text { 
        fill: #6b7280; 
        font-size: 12px; 
        font-family: system-ui, -apple-system, sans-serif;
      }
    </style>`;

    // Create gradient definitions
    svg += `<defs>
      <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.1"/>
      </linearGradient>
    </defs>`;

    // Calculate scales
    const maxValue = Math.max(...data.flatMap(d => [d.desktop, d.mobile]));
    const dates = data.map(d => new Date(d.date));
    const minDate = new Date(Math.min(...dates));
    const maxDate = new Date(Math.max(...dates));

    // Create grid lines
    for (let i = 0; i <= 5; i++) {
      const y = margin.top + (chartHeight / 5) * i;
      svg += `<line class="grid-line" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"/>`;
    }

    // Create areas
    const desktopArea = this.createAreaPath(data, 'desktop', margin, chartWidth, chartHeight, maxValue, minDate, maxDate);
    const mobileArea = this.createAreaPath(data, 'mobile', margin, chartWidth, chartHeight, maxValue, minDate, maxDate);

    svg += `<g class="area-group">
      <path class="chart-area" d="${desktopArea}" fill="url(#areaGradient)" stroke="#3b82f6" stroke-width="2" opacity="0.7"/>
      <path class="chart-area" d="${mobileArea}" fill="url(#areaGradient)" stroke="#10b981" stroke-width="2" opacity="0.7"/>
    </g>`;

    // Add interactive tooltips
    data.forEach((item, index) => {
      const x = margin.left + ((new Date(item.date) - minDate) / (maxDate - minDate)) * chartWidth;
      const desktopY = margin.top + chartHeight - (item.desktop / maxValue) * chartHeight;
      const mobileY = margin.top + chartHeight - (item.mobile / maxValue) * chartHeight;

      svg += `<g class="area-group">
        <circle cx="${x}" cy="${desktopY}" r="4" fill="#3b82f6" stroke="white" stroke-width="2" class="data-point desktop"/>
        <circle cx="${x}" cy="${mobileY}" r="4" fill="#10b981" stroke="white" stroke-width="2" class="data-point mobile"/>
        
        <g class="tooltip">
          <rect x="${x - 60}" y="${desktopY - 40}" width="120" height="35" fill="rgba(31, 41, 55, 0.95)" rx="6"/>
          <text x="${x}" y="${desktopY - 20}" text-anchor="middle" fill="white" font-size="10" font-weight="500">
            ${new Date(item.date).toLocaleDateString()}
          </text>
          <text x="${x}" y="${desktopY - 5}" text-anchor="middle" fill="white" font-size="11" font-weight="bold">
            Desktop: ${item.desktop}
          </text>
          <text x="${x}" y="${desktopY + 10}" text-anchor="middle" fill="white" font-size="11" font-weight="bold">
            Mobile: ${item.mobile}
          </text>
        </g>
      </g>`;
    });

    // Add axes
    svg += this.createAxes(data, margin, chartWidth, chartHeight, minDate, maxDate);

    svg += '</svg>';
    return svg;
  }

  static createAreaPath(data, dataKey, margin, chartWidth, chartHeight, maxValue, minDate, maxDate) {
    let path = `M ${margin.left},${margin.top + chartHeight}`;
    
    data.forEach((item, index) => {
      const x = margin.left + ((new Date(item.date) - minDate) / (maxDate - minDate)) * chartWidth;
      const y = margin.top + chartHeight - (item[dataKey] / maxValue) * chartHeight;
      
      if (index === 0) {
        path += ` L ${x},${y}`;
      } else {
        const prevX = margin.left + ((new Date(data[index - 1].date) - minDate) / (maxDate - minDate)) * chartWidth;
        const prevY = margin.top + chartHeight - (data[index - 1][dataKey] / maxValue) * chartHeight;
        const cpX = (prevX + x) / 2;
        path += ` C ${cpX},${prevY} ${cpX},${y}`;
      }
    });
    
    path += ` L ${margin.left + chartWidth},${margin.top + chartHeight} Z`;
    return path;
  }

  static createAxes(data, margin, chartWidth, chartHeight, minDate, maxDate) {
    let axes = '';

    // X-axis
    data.forEach((item, index) => {
      if (index % Math.ceil(data.length / 6) === 0) {
        const x = margin.left + ((new Date(item.date) - minDate) / (maxDate - minDate)) * chartWidth;
        axes += `<text class="axis-text" x="${x}" y="${margin.top + chartHeight + 15}" text-anchor="middle">
          ${new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </text>`;
      }
    });

    // Y-axis
    for (let i = 0; i <= 5; i++) {
      const y = margin.top + (chartHeight / 5) * i;
      const value = Math.round((5 - i) * (Math.max(...data.flatMap(d => [d.desktop, d.mobile])) / 5));
      axes += `<text class="axis-text" x="${margin.left - 10}" y="${y}" text-anchor="end">${value}</text>`;
    }

    return axes;
  }

  static createBarChart(data, options = {}) {
    const { width = 500, height = 300, colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'] } = options;
    const padding = 40;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    const barWidth = chartWidth / data.length * 0.8;
    const spacing = chartWidth / data.length * 0.2;

    let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
    
    svg += `<style>
      .bar { 
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
        cursor: pointer;
        filter: drop-shadow(0 1px 3px rgba(0,0,0,0.08));
      }
      .bar:hover { 
        opacity: 0.8; 
        transform: translateY(-2px) scale(1.02);
        filter: drop-shadow(0 3px 6px rgba(0,0,0,0.2));
      }
      .tooltip {
        opacity: 0;
        transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
        backdrop-filter: blur(4px);
      }
      .bar-group:hover .tooltip {
        opacity: 1;
      }
    </style>`;

    svg += `<g>`;
    data.forEach((item, index) => {
      const x = padding + index * (barWidth + spacing) + spacing/2;
      const barHeight = (item.value / Math.max(...data.map(d => d.value))) * chartHeight;
      const y = height - padding - barHeight;

      svg += `<g class="bar-group">
        <rect class="bar" x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" 
                fill="${colors[index % colors.length]}" rx="3"/>
        
        <g class="tooltip">
          <rect x="${x + barWidth/2 - 40}" y="${y - 35}" width="80" height="30" 
                fill="rgba(31, 41, 55, 0.95)" rx="6"/>
          <text x="${x + barWidth/2}" y="${y - 20}" text-anchor="middle" fill="white" font-size="10" font-weight="500">
            ${item.label}
          </text>
          <text x="${x + barWidth/2}" y="${y + 5}" text-anchor="middle" fill="white" font-size="12" font-weight="bold">
            ${item.value}
          </text>
        </g>
      </g>`;
    });
    svg += `</g>`;

    svg += '</svg>';
    return svg;
  }

  static createLineChart(data, options = {}) {
    const { width = 500, height = 300, color = '#3b82f6', smooth = false } = options;
    const padding = 40;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;

    let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
    
    svg += `<style>
      .chart-line { 
        transition: stroke-width 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
        filter: drop-shadow(0 1px 3px rgba(0,0,0,0.08));
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .chart-line:hover { 
        stroke-width: 3;
        filter: drop-shadow(0 2px 6px rgba(0,0,0,0.2));
      }
      .data-point { 
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
        cursor: pointer;
        filter: drop-shadow(0 1px 3px rgba(0,0,0,0.08));
      }
      .data-point:hover { 
        r: 6;
        filter: drop-shadow(0 2px 6px rgba(0,0,0,0.25));
      }
    </style>`;

    const maxValue = Math.max(...data.map(d => d.value));
    const points = data.map((item, index) => {
      const x = padding + (index / (data.length - 1)) * chartWidth;
      const y = height - padding - ((item.value / maxValue) * chartHeight);
      return { x, y, value: item.value };
    });

    // Create path
    let pathData;
    if (smooth && points.length > 2) {
      pathData = this.createSmoothPath(points);
    } else {
      pathData = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
    }

    svg += `<g>`;
    svg += `<path d="${pathData}" fill="none" stroke="${color}" stroke-width="2" class="chart-line"/>`;

    // Add data points
    points.forEach((point, index) => {
      svg += `<circle class="data-point" cx="${point.x}" cy="${point.y}" r="4" fill="${color}" stroke="white" stroke-width="2"/>`;
    });

    svg += `</g>`;
    svg += '</svg>';
    return svg;
  }

  static createSmoothPath(points) {
    if (points.length < 3) return `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
    
    let path = `M ${points[0].x},${points[0].y}`;
    
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const p2 = i < points.length - 2 ? points[i + 2] : p1;
      
      const cp1x = p0.x + (p1.x - p0.x) / 3;
      const cp1y = p0.y + (p1.y - p0.y) / 3;
      const cp2x = p1.x - (p2.x - p1.x) / 3;
      const cp2y = p1.y - (p2.y - p1.y) / 3;
      
      path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p1.x},${p1.y}`;
    }
    
    path += ` L ${points[points.length - 1].x},${points[points.length - 1].y}`;
    return path;
  }
}

module.exports = ReactChartComponents;
