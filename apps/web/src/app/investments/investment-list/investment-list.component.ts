import { Component, OnInit } from '@angular/core';
import { InvestmentsService } from '../investments.service';
import { Investment } from '../../core/models/investment.model';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.css']
})
export class InvestmentListComponent implements OnInit {
  investments: Investment[] = [];
  filteredInvestments: Investment[] = [];
  sortField: string = 'amount';
  sortOrder: string = 'asc';

  constructor(private investmentsService: InvestmentsService) {}

  ngOnInit(): void {
    this.fetchInvestments();
  }

  fetchInvestments(): void {
    this.investmentsService.getInvestments().subscribe((data: Investment[]) => {
      this.investments = data;
      this.applyFiltersAndSorting();
    });
  }

  applyFiltersAndSorting(): void {
    this.filteredInvestments = this.investments.slice();

    // Apply sorting
    this.filteredInvestments.sort((a, b) => {
      let comparison = 0;
      if (a[this.sortField] > b[this.sortField]) {
        comparison = 1;
      } else if (a[this.sortField] < b[this.sortField]) {
        comparison = -1;
      }
      return this.sortOrder === 'asc' ? comparison : -comparison;
    });
  }

  onSortChange(field: string): void {
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortOrder = 'asc';
    }
    this.applyFiltersAndSorting();
  }
}
