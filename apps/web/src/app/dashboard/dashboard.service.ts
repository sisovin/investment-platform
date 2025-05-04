import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Portfolio } from '../../core/models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPortfolioSummary(): Observable<Portfolio> {
    return this.http.get<Portfolio>(`${this.apiUrl}/dashboard/summary`);
  }

  getPerformanceData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dashboard/performance`);
  }

  getAllocationData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dashboard/allocation`);
  }
}
