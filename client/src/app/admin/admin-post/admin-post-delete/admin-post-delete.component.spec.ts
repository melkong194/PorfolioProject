import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostDeleteComponent } from './admin-post-delete.component';

describe('AdminPostDeleteComponent', () => {
  let component: AdminPostDeleteComponent;
  let fixture: ComponentFixture<AdminPostDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
