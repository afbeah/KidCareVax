import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompaignsComponent } from './compaigns.component';

describe('CompaignsComponent', () => {
  let component: CompaignsComponent;
  let fixture: ComponentFixture<CompaignsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CompaignsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
