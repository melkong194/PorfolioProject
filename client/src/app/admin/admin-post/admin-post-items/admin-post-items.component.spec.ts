import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostItemsComponent } from './admin-post-items.component';

describe('AdminPostItemsComponent', () => {
  let component: AdminPostItemsComponent;
  let fixture: ComponentFixture<AdminPostItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
