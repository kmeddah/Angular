import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConnexionComponent } from './user-connexion.component';
import { ChatService } from 'src/app/services/chat.service';
import { of } from 'rxjs';

fdescribe('UserConnexionComponent', () => {
  let component: UserConnexionComponent;
  let fixture: ComponentFixture<UserConnexionComponent>;

  const MockChatService = {
    connectUser() {
      return of(true);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserConnexionComponent],
      providers: [
        { provide: ChatService, useValue: MockChatService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
