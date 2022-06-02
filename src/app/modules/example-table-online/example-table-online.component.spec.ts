import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTableOnlineComponent } from './example-table-online.component';

describe('ExampleTableOnlineComponent', () => {
  let component: ExampleTableOnlineComponent;
  let fixture: ComponentFixture<ExampleTableOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleTableOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTableOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
