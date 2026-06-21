import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChildDetailsComponent } from './child-details.component';

describe('ChildDetailsComponent', () => {
  let component: ChildDetailsComponent;
  let fixture: ComponentFixture<ChildDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ChildDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
