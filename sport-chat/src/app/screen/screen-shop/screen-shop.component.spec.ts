import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenShopComponent } from './screen-shop.component';

describe('ScreenShopComponent', () => {
  let component: ScreenShopComponent;
  let fixture: ComponentFixture<ScreenShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
