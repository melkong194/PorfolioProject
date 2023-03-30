import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPorfItemsComponent } from './admin-porf-items.component';

describe('AdminPorfItemsComponent', () => {
  let component: AdminPorfItemsComponent;
  let fixture: ComponentFixture<AdminPorfItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPorfItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPorfItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
