import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyCapsuleComponent } from './technology-capsule.component';

describe('TechnologyCapsuleComponent', () => {
  let component: TechnologyCapsuleComponent;
  let fixture: ComponentFixture<TechnologyCapsuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyCapsuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
