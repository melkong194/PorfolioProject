import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfItemsComponent } from './porf-items.component';

describe('PorfItemsComponent', () => {
  let component: PorfItemsComponent;
  let fixture: ComponentFixture<PorfItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorfItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorfItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
