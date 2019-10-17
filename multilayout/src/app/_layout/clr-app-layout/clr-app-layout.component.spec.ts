import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrAppLayoutComponent } from './clr-app-layout.component';

describe('ClrAppLayoutComponent', () => {
  let component: ClrAppLayoutComponent;
  let fixture: ComponentFixture<ClrAppLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClrAppLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClrAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
