import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentLoginFormComponent } from './agent-login-form.component';

describe('AgentLoginFormComponent', () => {
  let component: AgentLoginFormComponent;
  let fixture: ComponentFixture<AgentLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentLoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
