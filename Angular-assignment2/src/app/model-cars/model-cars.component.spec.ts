import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCarsComponent } from './model-cars.component';

describe('ModelCarsComponent', () => {
  let component: ModelCarsComponent;
  let fixture: ComponentFixture<ModelCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
