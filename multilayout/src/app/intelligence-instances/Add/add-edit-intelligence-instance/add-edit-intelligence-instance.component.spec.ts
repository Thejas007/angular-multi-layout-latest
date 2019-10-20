import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditIntelligenceInstanceComponent } from './add-edit-intelligence-instance.component';

describe('AddEditIntelligenceInstanceComponent', () => {
  let component: AddEditIntelligenceInstanceComponent;
  let fixture: ComponentFixture<AddEditIntelligenceInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditIntelligenceInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditIntelligenceInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
