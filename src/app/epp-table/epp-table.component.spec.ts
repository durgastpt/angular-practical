import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EppTableComponent } from './epp-table.component';

describe('EppTableComponent', () => {
  let component: EppTableComponent;
  let fixture: ComponentFixture<EppTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EppTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EppTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
