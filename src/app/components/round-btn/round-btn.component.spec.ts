import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundBtnComponent } from './round-btn.component';

describe('RoundBtnComponent', () => {
  let component: RoundBtnComponent;
  let fixture: ComponentFixture<RoundBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
