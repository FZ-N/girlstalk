import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrpPage } from './grp.page';

describe('GrpPage', () => {
  let component: GrpPage;
  let fixture: ComponentFixture<GrpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
