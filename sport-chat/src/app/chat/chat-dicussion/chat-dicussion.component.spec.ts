import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDicussionComponent } from './chat-dicussion.component';

describe('ChatDicussionComponent', () => {
  let component: ChatDicussionComponent;
  let fixture: ComponentFixture<ChatDicussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDicussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDicussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
