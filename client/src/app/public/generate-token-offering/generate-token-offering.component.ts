import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-token-offering',
  templateUrl: './generate-token-offering.component.html',
  styleUrls: ['./generate-token-offering.component.scss'],
})
export class GenerateTokenOfferingComponent implements OnInit {
  generateOfferingForm: FormGroup;
  stages = [
    {
      name: 'Pre-Sale',
      tokenAllocationPerc: '40%',
      tokenAllocation: 200000,
      price: '0.05',
      discount: '25%',
    },
    {
      name: 'Private-Sale',
      tokenAllocationPerc: '40%',
      tokenAllocation: 200000,
      price: '0.07',
      discount: '15%',
    },
    {
      name: 'Sale',
      tokenAllocationPerc: '20%',
      tokenAllocation: 200000,
      price: '0.1',
      discount: '5%',
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.generateOfferingForm = this.fb.group({
      projectName: [null, Validators.required],
      fundRaise: [null, Validators.required],
      tokenSupply: [null, Validators.required],
      currency: [null, Validators.required],
      tokenSymbol: [null, Validators.required],
    });
  }
  updateLocation() {}
  back() {}
}
