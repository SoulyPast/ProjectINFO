import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdkarComponent } from './adkar.component';

describe('AdkarComponent', () => {
  let component: AdkarComponent;
  let fixture: ComponentFixture<AdkarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdkarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdkarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
