import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Transaction, TransactionSummary, TransactionVolume } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'api/transactions'; // Replace with actual API endpoint

  constructor(private http: HttpClient) {}

  /**
   * Get all transactions
   */
  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }

  /**
   * Get recent transactions
   * @param limit Number of transactions to return
   */
  getRecentTransactions(limit: number = 5): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/recent?limit=${limit}`);
  }

  /**
   * Get transaction summary for today
   */
  getTransactionSummary(): Observable<TransactionSummary> {
    return this.http.get<TransactionSummary>(`${this.apiUrl}/summary`);
  }

  /**
   * Get transaction volume over time for chart display
   * @param period The time period (daily, weekly, monthly)
   */
  getTransactionVolume(period: 'daily' | 'weekly' | 'monthly' = 'monthly'): Observable<TransactionVolume[]> {
    return this.http.get<TransactionVolume[]>(`${this.apiUrl}/volume?period=${period}`);
  }

  /**
   * Create a new transaction
   * @param transaction The transaction to create
   */
  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl, transaction);
  }

  /**
   * Update an existing transaction
   * @param id Transaction ID
   * @param transaction Updated transaction data
   */
  updateTransaction(id: string, transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.apiUrl}/${id}`, transaction);
  }

  /**
   * Delete a transaction
   * @param id Transaction ID to delete
   */
  deleteTransaction(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
