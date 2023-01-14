import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailButtonComponent } from './job-detail-button.component';

describe('JobDetailButtonComponent', () => {
  let component: JobDetailButtonComponent;
  let fixture: ComponentFixture<JobDetailButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetailButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
