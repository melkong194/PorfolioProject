import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPorfDeleteComponent } from './admin-porf-delete.component';

describe('AdminPorfDeleteComponent', () => {
  let component: AdminPorfDeleteComponent;
  let fixture: ComponentFixture<AdminPorfDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPorfDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPorfDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
