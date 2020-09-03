import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportBannerComponent } from './sport-banner.component';

describe('SportBannerComponent', () => {
  let component: SportBannerComponent;
  let fixture: ComponentFixture<SportBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
