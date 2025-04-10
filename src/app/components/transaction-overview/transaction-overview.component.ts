import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TransactionOverviewComponent implements OnInit {
  transactionData: { month: string; amount: number }[] = [];
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  maxValue: number = 180000;
  yAxisValues: number[] = [0, 45000, 90000, 135000, 180000];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadTransactionData();
  }

  loadTransactionData(): void {
    // In a real application, this would come from the TransactionService
    // For now, we're using the exact data from the image
    this.transactionData = [
      { month: 'Jan', amount: 45000 },
      { month: 'Feb', amount: 60000 },
      { month: 'Mar', amount: 55000 },
      { month: 'Apr', amount: 65000 },
      { month: 'May', amount: 75000 },
      { month: 'Jun', amount: 80000 },
      { month: 'Jul', amount: 90000 },
      { month: 'Aug', amount: 75000 },
      { month: 'Sep', amount: 80000 },
      { month: 'Oct', amount: 95000 },
      { month: 'Nov', amount: 135000 },
      { month: 'Dec', amount: 170000 }
    ];
  }

  getBarHeight(amount: number): string {
    const percentage = (amount / this.maxValue) * 100;
    return `${percentage}%`;
  }
}
