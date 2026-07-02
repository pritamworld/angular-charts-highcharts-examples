import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SalesResponse {
  labels: string[];
  sales: number[];
  profit: number[];
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly http = inject(HttpClient);

  getSalesData(): Observable<SalesResponse> {
    return this.http.get<SalesResponse>(
      'http://localhost:3000/sales'
      //From MOCK API
    );
  }
}
