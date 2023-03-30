import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPorfComponent } from './detail-porf.component';

describe('DetailPorfComponent', () => {
  let component: DetailPorfComponent;
  let fixture: ComponentFixture<DetailPorfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPorfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPorfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
