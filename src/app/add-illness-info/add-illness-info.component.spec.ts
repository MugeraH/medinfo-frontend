import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIllnessInfoComponent } from './add-illness-info.component';

describe('AddIllnessInfoComponent', () => {
  let component: AddIllnessInfoComponent;
  let fixture: ComponentFixture<AddIllnessInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIllnessInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIllnessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
