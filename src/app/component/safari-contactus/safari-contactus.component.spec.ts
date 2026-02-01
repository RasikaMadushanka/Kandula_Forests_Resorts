import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariContactusComponent } from './safari-contactus.component';

describe('SafariContactusComponent', () => {
  let component: SafariContactusComponent;
  let fixture: ComponentFixture<SafariContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafariContactusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafariContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
