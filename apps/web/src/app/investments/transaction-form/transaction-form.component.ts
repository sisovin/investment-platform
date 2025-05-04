import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvestmentsService } from '../investments.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {
  transactionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private investmentsService: InvestmentsService
  ) {}

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      investmentId: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const transactionData = this.transactionForm.value;
      this.investmentsService.createTransaction(transactionData).subscribe(
        response => {
          console.log('Transaction successful', response);
        },
        error => {
          console.error('Transaction failed', error);
        }
      );
    }
  }
}
