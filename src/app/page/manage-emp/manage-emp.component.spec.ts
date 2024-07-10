import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmpComponent } from './manage-emp.component';

describe('ManageEmpComponent', () => {
  let component: ManageEmpComponent;
  let fixture: ComponentFixture<ManageEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageEmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
