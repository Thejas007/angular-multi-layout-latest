import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrAppHeaderComponent } from './clr-app-header.component';

describe('ClrAppHeaderComponent', () => {
  let component: ClrAppHeaderComponent;
  let fixture: ComponentFixture<ClrAppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClrAppHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClrAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
