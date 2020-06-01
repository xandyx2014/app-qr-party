import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvitacionesPage } from './invitaciones.page';

describe('InvitacionesPage', () => {
  let component: InvitacionesPage;
  let fixture: ComponentFixture<InvitacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvitacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
