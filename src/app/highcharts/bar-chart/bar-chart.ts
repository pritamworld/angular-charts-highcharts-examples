import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-bar-chart',
  imports: [],
  templateUrl: './bar-chart.html',
  styleUrl: './bar-chart.css',
})
export class HighBarChart implements AfterViewInit {

  @ViewChild('chartCanvas')
  chartCanvas!: ElementRef<HTMLDivElement>;

  chart!: Highcharts.Chart;

  constructor() { }

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  private initializeChart(): void {
    Highcharts.chart(this.chartCanvas.nativeElement, {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Bar Chart'
      },
      xAxis: {
        categories: ['Apples', 'Oranges', 'Bananas', 'Pears', 'Grapes', 'Pineapples']
      },
      yAxis: {
        title: {
          text: 'Fruit Eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 3, 4, 2, 5, 3]
      }, {
        name: 'John',
        data: [5, 7, 3, 2, 1, 4]
      }, {
        name: 'Joe',
        data: [2, 2, 3, 2, 1, 4]
      }]
    });
  }
}
