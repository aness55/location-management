import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTokenOfferingComponent } from './generate-token-offering.component';

describe('GenerateTokenOfferingComponent', () => {
  let component: GenerateTokenOfferingComponent;
  let fixture: ComponentFixture<GenerateTokenOfferingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateTokenOfferingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateTokenOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
