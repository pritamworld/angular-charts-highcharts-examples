import { Component,
  AfterViewInit,
  ElementRef,
  ViewChild
 } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-char',
  templateUrl: './line-char.html',
  styleUrl: './line-char.css',
})
export class LineChar implements AfterViewInit {

  @ViewChild('chartCanvas')
  chartCanvas!: ElementRef<HTMLCanvasElement>;

  chart!: Chart;

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17'
        ],
        datasets: [
          {
            label: 'Sales',
            data: [467, 576, 572, 79, 92, 574, 573, 576],
            borderColor: 'blue',
            backgroundColor: 'blue',
            fill: false
          },
          {
            label: 'Profit',
            data: [542, 542, 536, 327, 17, 0, 538, 541],
            borderColor: 'green',
            backgroundColor: 'green',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        aspectRatio: 2.5
      }
    });
  }
}
