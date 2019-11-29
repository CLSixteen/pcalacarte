import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapeTroisComponent } from './etape-trois.component';

describe('EtapeTroisComponent', () => {
  let component: EtapeTroisComponent;
  let fixture: ComponentFixture<EtapeTroisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapeTroisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapeTroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
