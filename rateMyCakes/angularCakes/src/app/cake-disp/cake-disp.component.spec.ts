import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDispComponent } from './cake-disp.component';

describe('CakeDispComponent', () => {
  let component: CakeDispComponent;
  let fixture: ComponentFixture<CakeDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
