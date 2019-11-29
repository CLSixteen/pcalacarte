import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapeUnComponent } from './etape-un.component';

describe('EtapeUnComponent', () => {
  let component: EtapeUnComponent;
  let fixture: ComponentFixture<EtapeUnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapeUnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapeUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
