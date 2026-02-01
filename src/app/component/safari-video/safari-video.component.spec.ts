import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariVideoComponent } from './safari-video.component';

describe('SafariVideoComponent', () => {
  let component: SafariVideoComponent;
  let fixture: ComponentFixture<SafariVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafariVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafariVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
