import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalaccueilComponent } from './modalaccueil.component';

describe('ModalaccueilComponent', () => {
  let component: ModalaccueilComponent;
  let fixture: ComponentFixture<ModalaccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalaccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalaccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
