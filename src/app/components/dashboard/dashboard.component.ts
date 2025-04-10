import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../models/transaction.model';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedTimeframe: 'Daily' | 'Weekly' | 'Monthly' = 'Daily';
  
  // Stats data
  newUsersToday = 24;
  newUsersChange = '+12%';
  totalUsers = 1284;
  totalUsersChange = '+2.5%';
  transactionsToday = 'R 12,543';
  transactionsChange = '+18%';
  nonUsers = 342;
  nonUsersChange = '-4%';
  
  // Chart data
  chartMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  chartValues = [45000, 60000, 55000, 65000, 70000, 75000, 85000, 70000, 75000, 80000, 90000, 100000];
  
  // Recent transactions
  recentTransactions: Transaction[] = [
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
      amount: 1000.00,
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
      amount: 750.00,
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

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    // In a real application, we would fetch this data from the service
    // this.loadDashboardData();
  }

  changeTimeframe(timeframe: 'Daily' | 'Weekly' | 'Monthly'): void {
    this.selectedTimeframe = timeframe;
    // In a real application, we would fetch new data based on the timeframe
    // this.loadDashboardData(timeframe);
  }

  private loadDashboardData(timeframe: string = 'Daily'): void {
    // Example of how we would fetch data in a real application
    // this.transactionService.getDashboardStats(timeframe).subscribe(stats => {
    //   this.newUsersToday = stats.newUsers;
    //   this.totalUsers = stats.totalUsers;
    //   // etc.
    // });
    // 
    // this.transactionService.getRecentTransactions().subscribe(transactions => {
    //   this.recentTransactions = transactions;
    // });
  }

  getInitial(name: string): string {
    return name.charAt(0);
  }

  formatAmount(amount: number, type: string): string {
    return type === 'credit' ? `+R ${amount.toFixed(2)}` : `-R ${amount.toFixed(2)}`;
  }

  getAmountClass(type: string): string {
    return type === 'credit' ? 'text-green-500' : 'text-red-500';
  }
}
