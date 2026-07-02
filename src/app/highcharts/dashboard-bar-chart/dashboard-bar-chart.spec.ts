import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBarChart } from './dashboard-bar-chart';

describe('DashboardBarChart', () => {
  let component: DashboardBarChart;
  let fixture: ComponentFixture<DashboardBarChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardBarChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBarChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
