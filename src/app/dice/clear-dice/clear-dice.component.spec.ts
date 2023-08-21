import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearDiceComponent } from './clear-dice.component';

describe('ClearDiceComponent', () => {
  let component: ClearDiceComponent;
  let fixture: ComponentFixture<ClearDiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearDiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
