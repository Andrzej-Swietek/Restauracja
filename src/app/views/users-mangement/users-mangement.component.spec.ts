import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMangementComponent } from './users-mangement.component';

describe('UsersMangementComponent', () => {
  let component: UsersMangementComponent;
  let fixture: ComponentFixture<UsersMangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersMangementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
