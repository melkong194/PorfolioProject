import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdComponent } from './navbar-ad.component';

describe('NavbarAdComponent', () => {
  let component: NavbarAdComponent;
  let fixture: ComponentFixture<NavbarAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
