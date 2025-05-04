import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  performanceData: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getPerformanceData();
  }

  getPerformanceData(): void {
    this.dashboardService.getPerformanceData().subscribe(
      (data: any) => {
        this.performanceData = data;
      },
      (error: any) => {
        console.error('Error fetching performance data', error);
      }
    );
  }
}
