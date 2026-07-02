import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  inject
} from '@angular/core';

import * as Highcharts from 'highcharts';
import { DashboardService, SalesResponse } from '../../services/DashboardService';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-bar-chart',
  imports: [],
  templateUrl: './dashboard-bar-chart.html',
  styleUrl: './dashboard-bar-chart.css',
})
export class DashboardBarChart implements AfterViewInit {

  @ViewChild('chartContainer')
  chartContainer!: ElementRef<HTMLDivElement>;

  private readonly dashboardService = inject(DashboardService);

  chart!: Highcharts.Chart;

  ngAfterViewInit() {
    this.dashboardService.getSalesData().subscribe((data) => {
      this.createChart(data);
      //this.fetchSalesData();

      interval(3000)
        .pipe(
          switchMap(() => this.dashboardService.getSalesData())
        )
        .subscribe((data: SalesResponse) => this.updateChart(data));

    });
  }

  private fetchSalesData() {
    this.dashboardService.getSalesData().subscribe(data => {
      this.chart.xAxis[0].setCategories(data.labels);
      this.chart.series[0].setData(data.sales);
      this.chart.series[1].setData(data.profit);
      this.chart.redraw();
    });
  }

  private createChart(data: any): void {
    console.log('Creating chart with data:', data);
    this.chart = Highcharts.chart(
      this.chartContainer.nativeElement,
      {
        chart: {
          type: 'column'
        },

        title: {
          text: 'Monthly Sales'
        },

        xAxis: {
          categories: data.labels
        },

        series: [
          {
            type: 'column',
            name: 'Sales',
            data: data.sales
          },
          {
            type: 'column',
            name: 'Profit',
            data: data.profit
          }
        ]
      }
    );
  }

  private updateChart(data: SalesResponse) {
    console.log('Updating chart with new data:', data);
    this.chart.xAxis[0].setCategories(data.labels);
    this.chart.series[0].setData(data.sales);
    this.chart.series[1].setData(data.profit);
    this.chart.redraw();
  }

}
