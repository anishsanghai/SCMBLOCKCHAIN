import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingpageComponent } from './viewingpage.component';

describe('ViewingpageComponent', () => {
  let component: ViewingpageComponent;
  let fixture: ComponentFixture<ViewingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
