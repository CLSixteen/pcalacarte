import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapeDeuxComponent } from './etape-deux.component';

describe('EtapeDeuxComponent', () => {
  let component: EtapeDeuxComponent;
  let fixture: ComponentFixture<EtapeDeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapeDeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapeDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
