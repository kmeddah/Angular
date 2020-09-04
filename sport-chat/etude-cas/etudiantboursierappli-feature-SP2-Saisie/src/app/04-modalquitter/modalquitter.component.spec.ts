import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalquitterComponent } from './modalquitter.component';

describe('ModalquitterComponent', () => {
  let component: ModalquitterComponent;
  let fixture: ComponentFixture<ModalquitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalquitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalquitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
