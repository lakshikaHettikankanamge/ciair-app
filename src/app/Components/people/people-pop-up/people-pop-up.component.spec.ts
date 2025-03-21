import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplePopUpComponent } from './people-pop-up.component';

describe('PeoplePopUpComponent', () => {
  let component: PeoplePopUpComponent;
  let fixture: ComponentFixture<PeoplePopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeoplePopUpComponent]
    });
    fixture = TestBed.createComponent(PeoplePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
