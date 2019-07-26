import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListSliderComponent } from './my-list-slider.component';

describe('MyListSliderComponent', () => {
  let component: MyListSliderComponent;
  let fixture: ComponentFixture<MyListSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
