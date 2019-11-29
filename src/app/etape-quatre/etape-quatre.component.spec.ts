import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapeQuatreComponent } from './etape-quatre.component';

describe('EtapeQuatreComponent', () => {
  let component: EtapeQuatreComponent;
  let fixture: ComponentFixture<EtapeQuatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapeQuatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapeQuatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
