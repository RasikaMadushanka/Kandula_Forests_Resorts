import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetailsailsComponent } from './room-detailsails.component';

describe('RoomDetailsailsComponent', () => {
  let component: RoomDetailsailsComponent;
  let fixture: ComponentFixture<RoomDetailsailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomDetailsailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomDetailsailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
