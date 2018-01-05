import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgladajComponent } from './ogladaj.component';

describe('OgladajComponent', () => {
  let component: OgladajComponent;
  let fixture: ComponentFixture<OgladajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgladajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgladajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
