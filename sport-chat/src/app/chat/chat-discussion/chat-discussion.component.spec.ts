import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDiscussionComponent } from './chat-discussion.component';

describe('ChatDiscussionComponent', () => {
  let component: ChatDiscussionComponent;
  let fixture: ComponentFixture<ChatDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
