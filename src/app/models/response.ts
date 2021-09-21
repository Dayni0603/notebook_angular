export interface RenewalResponseModel {
  state: string;
  totalLoanAmount: number;
  tuFraudScoreColor: string;
  forecastedFinanceCharge: number;
  forecastedFinanceRefund: number;
  forecastedLateCharges: number;
  aAndH: number;
  life: number;
  personalProperty: number;
  iui: number;
  siAuto: number;
  totalForecastedRevenue: number;
  forecastedRenewalImpact: number;
  forecastedOperatingCost: number;
  forecastedCnl: number;
  riskFactorCnlMultiple: number;
  loanHistoryNumberFactorOnRisKCnlMultiple: number;
  finalRiskFactorCnlMultiple: number;
  forecastedProfit: number;
  forecastedRoaGrossNote: number;
  forecastedRoaCashAdvance: number;
  decision: string;
  employmentVerificationReview: string;
}
