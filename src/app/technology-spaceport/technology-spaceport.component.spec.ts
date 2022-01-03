import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologySpaceportComponent } from './technology-spaceport.component';

describe('TechnologySpaceportComponent', () => {
  let component: TechnologySpaceportComponent;
  let fixture: ComponentFixture<TechnologySpaceportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologySpaceportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologySpaceportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
