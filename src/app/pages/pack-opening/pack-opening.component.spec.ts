import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackOpeningComponent } from './pack-opening.component';

describe('PackOpeningComponent', () => {
  let component: PackOpeningComponent;
  let fixture: ComponentFixture<PackOpeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackOpeningComponent]
    });
    fixture = TestBed.createComponent(PackOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
