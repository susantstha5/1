import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipBoxComponent } from './chip-box.component';

describe('ChipBoxComponent', () => {
  let component: ChipBoxComponent;
  let fixture: ComponentFixture<ChipBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
