export interface RenewalRequestModel {
  branchId: number;
  payment?: number;
  term?: string;
  v4Score?: number;
  rvStlScore?: number;
  loanHistoryNumber?: number;
  twn?: string;
  tuFraudScore?: number;
  ahPremium?: number;
  lifePremium?: number;
  personalPropertyPremium?: number;
  iuiPremium?: number;
  siAutoPremium: number;
}

export interface RequestModel {
  branchId: number;
  payment?: number;
  term?: string;
  v4Score?: number;
  rvStlScore?: number;
  loanHistoryNumber?: number;
  twn?: string;
  tuFraudScore?: number;
  ahPremium?: number;
  lifePremium?: number;
  personalPropertyPremium?: number;
  iuiPremium?: number;
  siAutoPremium: number;
}
