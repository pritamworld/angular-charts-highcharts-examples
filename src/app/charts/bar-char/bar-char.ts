import { Component,
  AfterViewInit,
  ElementRef,
  ViewChild
 } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-char',
  templateUrl: './bar-char.html',
  styleUrl: './bar-char.css',
})
export class BarChar implements AfterViewInit {

  @ViewChild('chartCanvas')
  chartCanvas!: ElementRef<HTMLCanvasElement>;

  chart!: Chart;

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
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
            backgroundColor: 'blue'
          },
          {
            label: 'Profit',
            data: [542, 542, 536, 327, 17, 0, 538, 541],
            backgroundColor: 'green'
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
