import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjobFormComponent } from './addjob-form.component';

describe('AddjobFormComponent', () => {
  let component: AddjobFormComponent;
  let fixture: ComponentFixture<AddjobFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddjobFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddjobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
