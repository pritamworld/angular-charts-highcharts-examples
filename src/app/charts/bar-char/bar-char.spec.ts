import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChar } from './bar-char';

describe('BarChar', () => {
  let component: BarChar;
  let fixture: ComponentFixture<BarChar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
