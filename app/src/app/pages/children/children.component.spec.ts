import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChildrenComponent } from './children.component';

describe('ChildrenComponent', () => {
  let component: ChildrenComponent;
  let fixture: ComponentFixture<ChildrenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ChildrenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
