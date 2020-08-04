import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuranAlKarimComponent } from './quran-al-karim.component';

describe('QuranAlKarimComponent', () => {
  let component: QuranAlKarimComponent;
  let fixture: ComponentFixture<QuranAlKarimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuranAlKarimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuranAlKarimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
