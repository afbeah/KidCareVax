import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddVaccineComponent } from './add-vaccine.component';

describe('AddVaccineComponent', () => {
  let component: AddVaccineComponent;
  let fixture: ComponentFixture<AddVaccineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AddVaccineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
