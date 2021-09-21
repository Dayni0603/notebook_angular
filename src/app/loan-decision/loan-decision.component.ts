import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-decision',
  templateUrl: './loan-decision.component.html',
  styleUrls: ['./loan-decision.component.scss'],
})
export class LoanDecisionComponent implements OnInit {
  constructor() {}
  listOfData = [];
  listOfColumns: any[] = [
    {
      name: 'State',
      nzLeft: false,
      tooltip: 'State',
    },
    {
      name: 'TLA',
      tooltip: 'Total Loan Amount',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'TFSC',
      tooltip: 'TuFraud Score Color',
    },
    {
      name: 'FFC',
      tooltip: 'Forecasted Finance Charge',
    },
    {
      name: 'FFR',
      tooltip: 'Forecasted Finance Refund',
    },
    {
      name: 'FLC',
      tooltip: 'Forecasted Late Charges',
    },
    {
      name: 'AAH',
      tooltip: 'A and H',
    },
    {
      name: 'Life',
      tooltip: 'Life',
    },
    {
      name: 'PP',
      tooltip: 'Personal Property',
    },
    {
      name: 'IUI',
      tooltip: 'Iui',
    },
    {
      name: 'SiAu',
      tooltip: 'Si Auto',
    },
    {
      name: 'TFR',
      tooltip: 'Total Forecasted Revenue',
    },
    {
      name: 'FRI',
      tooltip: 'Forecasted Renewal Impact',
    },
    {
      name: 'FOC',
      tooltip: 'Forecasted Operating Cost',
    },
    {
      name: 'FCNL',
      tooltip: 'Forecasted Cnl',
    },
    {
      name: 'RFC',
      tooltip: 'Risk Factor Cnl Multiple',
    },
    {
      name: 'IHN',
      tooltip: 'Loan History Number Factor On RisK Cnl Multiple',
    },
    {
      name: 'FRF',
      tooltip: 'Final Risk Factor Cnl Multiple',
    },
    {
      name: 'FP',
      tooltip: 'Forecasted Profit',
    },
    {
      name: 'FRG',
      tooltip: 'Forecasted RoaGross Note',
    },
    {
      name: 'FRC',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      nzRight: true,
      tooltip: 'Forecasted Roa Cash Advance',
    },
    {
      name: 'DEC',
      tooltip: 'Decision',
    },
    {
      name: 'EVR',
      tooltip: 'Employment Verification Review',
    },
  ];
  ngOnInit(): void {}
}
