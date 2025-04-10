import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../models/transaction.model';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class RecentTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  
  constructor(private transactionService: TransactionService) {}
  
  ngOnInit(): void {
    // In a real application, we would fetch this data from the service
    // this.transactionService.getRecentTransactions().subscribe(data => {
    //   this.transactions = data;
    // });
    
    // Using mock data from the image
    this.transactions = [
      {
        id: '1',
        userName: 'Thabo Mbeki',
        date: '2023-11-14',
        amount: 250.00,
        type: 'credit'
      },
      {
        id: '2',
        userName: 'Nomzamo Mbatha',
        date: '2023-11-13',
        amount: -1000.00,
        type: 'debit'
      },
      {
        id: '3',
        userName: 'Siya Kolisi',
        date: '2023-11-12',
        amount: 500.00,
        type: 'credit'
      },
      {
        id: '4',
        userName: 'Trevor Noah',
        date: '2023-11-11',
        amount: -750.00,
        type: 'debit'
      },
      {
        id: '5',
        userName: 'Patrice Motsepe',
        date: '2023-11-10',
        amount: 2500.00,
        type: 'credit'
      }
    ];
  }

  getInitial(name: string): string {
    return name.charAt(0);
  }

  formatAmount(amount: number): string {
    const prefix = amount >= 0 ? '+R ' : '-R ';
    return prefix + Math.abs(amount).toFixed(2);
  }

  getAmountClass(amount: number): string {
    return amount >= 0 ? 'text-green-500' : 'text-red-500';
  }
}
