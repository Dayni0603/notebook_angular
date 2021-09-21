import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestModel } from 'src/app/models/request';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss'],
})
export class RequestFormComponent implements OnInit {
  @Input() isRequestFormModalOpen = false;
  @Input() isCleanRequestForm = false;
  @Input() formTitle = '';
  @Output() readonly Close = new EventEmitter<boolean>();
  @Output() readonly Submit = new EventEmitter<RequestModel>();
  constructor(private fb: FormBuilder) {
    this.requestForm = this.fb.group({
      branchId: [null, [Validators.required]],
      payment: [null],
      term: [null],
      v4Score: [null],
      rvStlScore: [null],
      loanHistoryNumber: [null],
      twn: ['red'],
      tuFraudScore: [null],
      ahPremium: [null],
      lifePremium: [null],
      personalPropertyPremium: [null],
      iuiPremium: [null],
      siAutoPremium: [null],
    });
  }
  requestForm!: FormGroup;
  twnOptions = [
    { label: 'Red', value: 'red' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Green', value: 'green' },
    { label: 'Orange', value: 'orange' },
  ];

  ngOnInit(): void {
    this.onClear();
  }

  validateForm() {
    for (const i in this.requestForm.controls) {
      if (this.requestForm.controls.hasOwnProperty(i)) {
        this.requestForm.controls[i].markAsDirty();
        this.requestForm.controls[i].updateValueAndValidity();
      }
    }

    if (this.requestForm.valid) {
      this.submitForm();
    }
  }

  submitForm(): void {
    this.Submit.emit(this.requestForm.value);
  }

  onClose() {
    this.Close.emit(false);
    this.onClear();
  }
  onClear() {
    this.requestForm.reset();
  }
}
