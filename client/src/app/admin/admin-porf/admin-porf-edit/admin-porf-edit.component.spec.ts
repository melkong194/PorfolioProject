import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPorfEditComponent } from './admin-porf-edit.component';

describe('AdminPorfEditComponent', () => {
  let component: AdminPorfEditComponent;
  let fixture: ComponentFixture<AdminPorfEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPorfEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPorfEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
