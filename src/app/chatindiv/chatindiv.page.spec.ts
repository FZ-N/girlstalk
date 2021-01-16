import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatindivPage } from './chatindiv.page';

describe('ChatindivPage', () => {
  let component: ChatindivPage;
  let fixture: ComponentFixture<ChatindivPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatindivPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatindivPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
