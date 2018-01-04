import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdycjaComponent } from './edycja.component';

describe('EdycjaComponent', () => {
  let component: EdycjaComponent;
  let fixture: ComponentFixture<EdycjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdycjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdycjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
