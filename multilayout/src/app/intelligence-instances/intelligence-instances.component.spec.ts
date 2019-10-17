import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelligenceInstancesComponent } from './intelligence-instances.component';

describe('IntelligenceInstancesComponent', () => {
  let component: IntelligenceInstancesComponent;
  let fixture: ComponentFixture<IntelligenceInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntelligenceInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelligenceInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
