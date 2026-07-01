import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChar } from './line-char';

describe('LineChar', () => {
  let component: LineChar;
  let fixture: ComponentFixture<LineChar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
