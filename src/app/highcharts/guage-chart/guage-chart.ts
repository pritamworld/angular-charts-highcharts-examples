import { Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  inject,
  PLATFORM_ID
 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-guage-chart',
  imports: [],
  templateUrl: './guage-chart.html',
  styleUrl: './guage-chart.css',
})
export class GuageChart implements AfterViewInit {

  private platformId = inject(PLATFORM_ID);

  @ViewChild('chartCanvas')
  chartCanvas!: ElementRef<HTMLDivElement>;

  chart!: Highcharts.Chart;

  constructor() {

  }

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  private async initializeChart() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const Highcharts = await import('highcharts');
    await import('highcharts/highcharts-more');

    const options: Highcharts.Options = {
      chart: {
        type: 'gauge'
      },

      title: {
        text: 'Revenue this month'
      },

      // Defines the gauge area
      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#FFF'],
              [1, '#333']
            ]
          },
          borderWidth: 0,
          outerRadius: '109%'
        }, {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#333'],
              [1, '#FFF']
            ]
          },
          borderWidth: 1,
          outerRadius: '107%'
        }, {
          // default background
        }, {
          backgroundColor: '#DDD',
          borderWidth: 0,
          outerRadius: '105%',
          innerRadius: '103%'
        }]
      },

      // The value axis
      yAxis: {
        min: 0,
        max: 200000,
        plotBands: [{
          from: 0,
          to: 110000,
          color: 'rgba(128, 128, 128, 0.1)' // gray
        }, {
          from: 111000,
          to: 149000,
          color: '#FFBF00' // yellow
        }, {
          from: 150000,
          to: 200000,
          color: '#00A96B' // green
        }]
      },

      series: [{
        type: 'gauge',
        name: 'Revenue',
        data: [80000],
        tooltip: {
          valuePrefix: '$'
        },
        dataLabels: {
          format: '${y:,.0f}'
        }
      }]
    };

    this.chart = Highcharts.chart(this.chartCanvas.nativeElement, options);
  }
}
