import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulttableComponent } from './defaulttable.component';

describe('DefaulttableComponent', () => {
  let component: DefaulttableComponent;
  let fixture: ComponentFixture<DefaulttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaulttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaulttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
