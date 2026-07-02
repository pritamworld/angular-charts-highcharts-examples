import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeCounter } from './awesome-counter';

describe('AwesomeCounter', () => {
  let component: AwesomeCounter;
  let fixture: ComponentFixture<AwesomeCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwesomeCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwesomeCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
