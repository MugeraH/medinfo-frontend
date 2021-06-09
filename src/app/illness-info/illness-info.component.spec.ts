import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllnessInfoComponent } from './illness-info.component';

describe('IllnessInfoComponent', () => {
  let component: IllnessInfoComponent;
  let fixture: ComponentFixture<IllnessInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllnessInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllnessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
