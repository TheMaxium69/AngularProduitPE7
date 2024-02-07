import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseradresseComponent } from './useradresse.component';

describe('UseradresseComponent', () => {
  let component: UseradresseComponent;
  let fixture: ComponentFixture<UseradresseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseradresseComponent]
    });
    fixture = TestBed.createComponent(UseradresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
