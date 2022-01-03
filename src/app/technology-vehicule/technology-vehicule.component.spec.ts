import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyVehiculeComponent } from './technology-vehicule.component';

describe('TechnologyVehiculeComponent', () => {
  let component: TechnologyVehiculeComponent;
  let fixture: ComponentFixture<TechnologyVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyVehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
