import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsImageshowComponent } from './rooms-imageshow.component';

describe('RoomsImageshowComponent', () => {
  let component: RoomsImageshowComponent;
  let fixture: ComponentFixture<RoomsImageshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsImageshowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomsImageshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
