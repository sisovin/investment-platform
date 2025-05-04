import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  allocationData: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getAllocationData();
  }

  getAllocationData(): void {
    this.dashboardService.getAllocationData().subscribe(
      (data: any) => {
        this.allocationData = data;
      },
      (error: any) => {
        console.error('Error fetching allocation data', error);
      }
    );
  }
}
