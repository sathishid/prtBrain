import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumViewerComponent } from './sum-viewer.component';

describe('SumViewerComponent', () => {
  let component: SumViewerComponent;
  let fixture: ComponentFixture<SumViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
