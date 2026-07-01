import { Component,
  AfterViewInit,
  ViewChild,
  ElementRef
 } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-chart',
  imports: [],
  templateUrl: './doughnut-chart.html',
  styleUrl: './doughnut-chart.css',
})
export class DoughnutChart implements AfterViewInit {

  @ViewChild('doughnutChart')
  chartCanvas!: ElementRef<HTMLCanvasElement>;

  chart!: Chart;
  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {

  const ctx = this.chartCanvas.nativeElement;
  this.chart = new Chart(ctx, {
    type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
      labels: ['Red', 'Pink', 'Green', 'Yellow', 'Orange', 'Blue',],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 240, 100, 432, 253, 34],
          backgroundColor: [
            'red',
            'pink',
            'green',
            'yellow',
            'orange',
            'blue',
          ],
          hoverOffset: 4
        }],
      },
    options: {
      aspectRatio: 2.5
    }

    });
  }
}
