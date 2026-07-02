import { Component, signal } from '@angular/core';
//import { DatePipe, DecimalPipe, CurrencyPipe, JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee/employee';
import { BarChar } from './charts/bar-char/bar-char';
import { LineChar } from './charts/line-char/line-char';
import { PieChart } from './charts/pie-chart/pie-chart';
import { DoughnutChart } from './highcharts/doughnut-chart/doughnut-chart';
import { HighBarChart } from './highcharts/bar-chart/bar-chart';
import { GuageChart } from './highcharts/guage-chart/guage-chart';

import { AwesomeCounter } from './awesome-counter/awesome-counter';
//Chart from Mock API
import { DashboardBarChart } from './highcharts/dashboard-bar-chart/dashboard-bar-chart';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Employee,
    CommonModule,
    BarChar,
    LineChar,
    PieChart,
    DoughnutChart,
    HighBarChart,
    DashboardBarChart,
    AwesomeCounter,
    GuageChart
    //DatePipe, DecimalPipe, CurrencyPipe, JsonPipe
  ],
  // template: "<h1>Hello</h1>",
  templateUrl: './app.html',
  // styles:"h1{color: red;}"
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pritesh Patel');

  empObj = {
    eid: 1,
    first_name: 'Pritesh',
    last_name: 'Patel',
    designation: 'Professor',
    city: 'Toronto'
  }

  joinDate: Date = new Date(2026, 0, 24)
  now = new Date()

  onAlertButtonClick(e:any): void {
    alert('Welcome to Angular Programming' + e)
  }
}
