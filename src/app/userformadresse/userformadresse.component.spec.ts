import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformadresseComponent } from './userformadresse.component';

describe('UserformadresseComponent', () => {
  let component: UserformadresseComponent;
  let fixture: ComponentFixture<UserformadresseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserformadresseComponent]
    });
    fixture = TestBed.createComponent(UserformadresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
