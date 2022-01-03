import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationEuropaComponent } from './destination-europa.component';

describe('DestinationEuropaComponent', () => {
  let component: DestinationEuropaComponent;
  let fixture: ComponentFixture<DestinationEuropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationEuropaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
