import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HeaderAction } from '../models/columnItem';
import { RequestModel } from '../models/request';
import { RenewalResponseModel } from '../models/response';

@Component({
  selector: 'app-loan-decision',
  templateUrl: './loan-decision.component.html',
  styleUrls: ['./loan-decision.component.scss'],
})
export class LoanDecisionComponent implements OnInit {
  constructor() {}
  isRequestFormOpen = false;
  clearRequestForm = false;
  borrowerRequest = {};
  listOfData: RenewalResponseModel[] = [];
  formTitle = '';
  requestModel = 0;
  headerButton: HeaderAction[] = [
    {
      title: 'Renewal',
      icon: 'calculator',
      onClick: () => this.openDrawer(1),
    },
    {
      title: 'New Borrower',
      icon: 'calculator',
      onClick: () => this.openDrawer(2),
    },
  ];
  openDrawer(model: number): void {
    console.log(model);

    this.isRequestFormOpen = true;
    if (model === 0) {
      this.formTitle = 'Renewal';
    } else if (model === 1) {
      this.formTitle = 'New Borrower';
    }
    this.requestModel = model;
  }

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

  closeDrawer(): void {
    this.isRequestFormOpen = false;
    this.clearRequestForm = false;
    this.requestModel = 0;
  }
  SubmitForm(requestData: RequestModel): void {
    this.borrowerRequest = requestData;
    if (this.requestModel === 1) {
      // this.getRoaProfit();
    } else if (this.requestModel === 2) {
      //this.getRoaProfitForNb();
    }
  }
  ngOnInit(): void {}
}
