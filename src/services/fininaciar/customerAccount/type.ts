export interface CustomerAccountType {
  date: string;
  account: string; // Add this line
  customer_name: string;
  first_remainder: number;
  ready: string;
  not_ready: string;
  receipt: string;
  payer: string;
  employee_transaction: string;
  debit: number;
  credit: number;
  last_remainder: number;
}
