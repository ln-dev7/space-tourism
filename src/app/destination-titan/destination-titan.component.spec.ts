import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationTitanComponent } from './destination-titan.component';

describe('DestinationTitanComponent', () => {
  let component: DestinationTitanComponent;
  let fixture: ComponentFixture<DestinationTitanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationTitanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationTitanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
