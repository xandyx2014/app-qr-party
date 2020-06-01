import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidacionPage } from './validacion.page';

describe('ValidacionPage', () => {
  let component: ValidacionPage;
  let fixture: ComponentFixture<ValidacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
