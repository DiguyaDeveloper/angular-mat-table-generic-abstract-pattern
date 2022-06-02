import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTableOfflineComponent } from './example-table-offline.component';

describe('ExampleTableOfflineComponent', () => {
  let component: ExampleTableOfflineComponent;
  let fixture: ComponentFixture<ExampleTableOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleTableOfflineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTableOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
