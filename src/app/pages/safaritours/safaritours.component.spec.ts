import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafaritoursComponent } from './safaritours.component';

describe('SafaritoursComponent', () => {
  let component: SafaritoursComponent;
  let fixture: ComponentFixture<SafaritoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafaritoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafaritoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
