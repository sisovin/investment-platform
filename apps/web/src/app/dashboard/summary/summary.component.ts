import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Portfolio } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  portfolio: Portfolio;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getPortfolioSummary();
  }

  getPortfolioSummary(): void {
    this.dashboardService.getPortfolioSummary().subscribe(
      (data: Portfolio) => {
        this.portfolio = data;
      },
      (error: any) => {
        console.error('Error fetching portfolio summary', error);
      }
    );
  }
}
