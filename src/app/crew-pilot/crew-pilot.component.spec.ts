import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewPilotComponent } from './crew-pilot.component';

describe('CrewPilotComponent', () => {
  let component: CrewPilotComponent;
  let fixture: ComponentFixture<CrewPilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewPilotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewPilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
