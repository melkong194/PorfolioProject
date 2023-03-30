import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfComponent } from './porf.component';

describe('PorfComponent', () => {
  let component: PorfComponent;
  let fixture: ComponentFixture<PorfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
