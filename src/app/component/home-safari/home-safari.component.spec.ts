import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSafariComponent } from './home-safari.component';

describe('HomeSafariComponent', () => {
  let component: HomeSafariComponent;
  let fixture: ComponentFixture<HomeSafariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSafariComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSafariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
