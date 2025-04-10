export interface Transaction {
  id?: string;
  userId: string;
  userName: string;
  date: string;
  amount: number;
  isPositive: boolean;
}

export interface TransactionSummary {
  transactionsToday: number;
  percentageChange: number;
}

export interface TransactionVolume {
  month: string;
  amount: number;
}
