import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneligibiliteComponent } from './noneligibilite.component';

describe('NoneligibiliteComponent', () => {
  let component: NoneligibiliteComponent;
  let fixture: ComponentFixture<NoneligibiliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoneligibiliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneligibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
