import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPorfAddComponent } from './admin-porf-add.component';

describe('AdminPorfAddComponent', () => {
  let component: AdminPorfAddComponent;
  let fixture: ComponentFixture<AdminPorfAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPorfAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPorfAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
