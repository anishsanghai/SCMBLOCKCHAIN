import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadateSComponent } from './upadate-s.component';

describe('UpadateSComponent', () => {
  let component: UpadateSComponent;
  let fixture: ComponentFixture<UpadateSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadateSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpadateSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
