import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailViewByIdComponent } from './personal-detail-view-by-id.component';

describe('PersonalDetailViewByIdComponent', () => {
  let component: PersonalDetailViewByIdComponent;
  let fixture: ComponentFixture<PersonalDetailViewByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalDetailViewByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalDetailViewByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
