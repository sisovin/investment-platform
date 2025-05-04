import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvestmentsService } from '../investments.service';
import { Investment } from '../../core/models/investment.model';

@Component({
  selector: 'app-investment-detail',
  templateUrl: './investment-detail.component.html',
  styleUrls: ['./investment-detail.component.css']
})
export class InvestmentDetailComponent implements OnInit {
  investment: Investment;

  constructor(
    private route: ActivatedRoute,
    private investmentsService: InvestmentsService
  ) {}

  ngOnInit(): void {
    this.fetchInvestmentDetail();
  }

  fetchInvestmentDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.investmentsService.getInvestment(id).subscribe((data: Investment) => {
      this.investment = data;
    });
  }
}
