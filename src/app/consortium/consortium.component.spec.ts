import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsortiumComponent } from './consortium.component';

describe('ConsortiumComponent', () => {
  let component: ConsortiumComponent;
  let fixture: ComponentFixture<ConsortiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsortiumComponent]
    });
    fixture = TestBed.createComponent(ConsortiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});