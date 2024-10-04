import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuth2Component } from './user-auth2.component';

describe('UserAuth2Component', () => {
  let component: UserAuth2Component;
  let fixture: ComponentFixture<UserAuth2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAuth2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAuth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
