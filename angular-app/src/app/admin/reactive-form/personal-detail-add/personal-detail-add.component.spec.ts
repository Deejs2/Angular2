import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailAddComponent } from './personal-detail-add.component';

describe('PersonalDetailAddComponent', () => {
  let component: PersonalDetailAddComponent;
  let fixture: ComponentFixture<PersonalDetailAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalDetailAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
