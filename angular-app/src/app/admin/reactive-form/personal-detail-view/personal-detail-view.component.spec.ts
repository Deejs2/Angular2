import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailViewComponent } from './personal-detail-view.component';

describe('PersonalDetailViewComponent', () => {
  let component: PersonalDetailViewComponent;
  let fixture: ComponentFixture<PersonalDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalDetailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
