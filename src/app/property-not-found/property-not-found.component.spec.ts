import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyNotFoundComponent } from './property-not-found.component';

describe('PropertyNotFoundComponent', () => {
  let component: PropertyNotFoundComponent;
  let fixture: ComponentFixture<PropertyNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
