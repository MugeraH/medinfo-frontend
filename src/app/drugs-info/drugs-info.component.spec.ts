import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsInfoComponent } from './drugs-info.component';

describe('DrugsInfoComponent', () => {
  let component: DrugsInfoComponent;
  let fixture: ComponentFixture<DrugsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
