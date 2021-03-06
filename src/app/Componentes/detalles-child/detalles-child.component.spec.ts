import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesChildComponent } from './detalles-child.component';

describe('DetallesChildComponent', () => {
  let component: DetallesChildComponent;
  let fixture: ComponentFixture<DetallesChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
