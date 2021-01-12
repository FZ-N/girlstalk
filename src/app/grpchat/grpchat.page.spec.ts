import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrpchatPage } from './grpchat.page';

describe('GrpchatPage', () => {
  let component: GrpchatPage;
  let fixture: ComponentFixture<GrpchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrpchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrpchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
