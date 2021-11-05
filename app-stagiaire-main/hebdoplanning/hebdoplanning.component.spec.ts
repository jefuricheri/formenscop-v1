import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebdoplanningComponent } from './hebdoplanning.component';

describe('HebdoplanningComponent', () => {
  let component: HebdoplanningComponent;
  let fixture: ComponentFixture<HebdoplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HebdoplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HebdoplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
