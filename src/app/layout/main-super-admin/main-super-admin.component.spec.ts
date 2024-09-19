import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSuperAdminComponent } from './main-super-admin.component';

describe('MainSuperAdminComponent', () => {
  let component: MainSuperAdminComponent;
  let fixture: ComponentFixture<MainSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSuperAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
