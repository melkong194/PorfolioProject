import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPorfComponent } from './admin-porf.component';

describe('AdminPorfComponent', () => {
  let component: AdminPorfComponent;
  let fixture: ComponentFixture<AdminPorfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPorfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPorfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
