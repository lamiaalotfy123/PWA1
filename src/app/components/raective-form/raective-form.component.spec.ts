import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaectiveFormComponent } from './raective-form.component';

describe('RaectiveFormComponent', () => {
  let component: RaectiveFormComponent;
  let fixture: ComponentFixture<RaectiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaectiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaectiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
