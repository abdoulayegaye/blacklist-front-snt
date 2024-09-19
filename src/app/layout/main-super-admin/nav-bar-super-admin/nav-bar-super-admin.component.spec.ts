import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSuperAdminComponent } from './nav-bar-super-admin.component';

describe('NavBarSuperAdminComponent', () => {
  let component: NavBarSuperAdminComponent;
  let fixture: ComponentFixture<NavBarSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarSuperAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
