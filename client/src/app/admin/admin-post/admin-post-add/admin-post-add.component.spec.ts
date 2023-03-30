import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostAddComponent } from './admin-post-add.component';

describe('AdminPostAddComponent', () => {
  let component: AdminPostAddComponent;
  let fixture: ComponentFixture<AdminPostAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
