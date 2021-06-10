import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIllnessComponent } from './view-illness.component';

describe('ViewIllnessComponent', () => {
  let component: ViewIllnessComponent;
  let fixture: ComponentFixture<ViewIllnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIllnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIllnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
