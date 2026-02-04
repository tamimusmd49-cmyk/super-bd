export enum Page {
  AUTH = 'AUTH',
  REGISTER = 'REGISTER', 
  HOME = 'HOME',
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
  OFFERS = 'OFFERS',
  RECORD = 'RECORD',
  ABOUT_US = 'ABOUT_US',
  PROFILE = 'PROFILE',
  SUPPORT = 'SUPPORT'
}

export enum PaymentMethod {
  NAGAD = 'Nagad',
  BKASH = 'Bkash',
  USDT = 'USDT',
  BINANCE = 'Binance'
}

export enum MarketState {
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  DOWN = 'DOWN'
}

export interface User {
  uid?: string;
  name: string;
  phone: string; 
  email: string;
  balance: number; // Real balance from Firestore
  role: 'user' | 'admin';
  createdAt?: any;
}

export interface Transaction {
  id: string;
  userId: string;
  userName: string;
  type: 'DEPOSIT' | 'WITHDRAW';
  amount: number;
  method: string;
  number?: string;
  trxID?: string; // For deposits
  status: 'Pending' | 'Success' | 'Rejected';
  date: any;
}