import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTopicComponent } from './chat-topic.component';

describe('ChatTopicComponent', () => {
  let component: ChatTopicComponent;
  let fixture: ComponentFixture<ChatTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
