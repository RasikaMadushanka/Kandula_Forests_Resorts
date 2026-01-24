import { Component } from '@angular/core';

@Component({
  selector: 'app-image-frame',
  standalone: true,
  imports: [],
  templateUrl: './image-frame.component.html',
  styleUrl: './image-frame.component.css'
})
export class ImageFrameComponent {
  public resortImages = [
    { url: 'assets/hero-pool.jpg', size: 'big', title: 'Infinity Pool' },
    { url: 'assets/room-1.jpg', size: 'wide', title: 'Ocean View Suite' },
    { url: 'assets/food.jpg', size: 'standard', title: 'Fine Dining' },
    { url: 'assets/spa.jpg', size: 'tall', title: 'Luxury Spa' },
    { url: 'assets/beach.jpg', size: 'standard', title: 'Private Beach' },
    { url: 'assets/lobby.jpg', size: 'wide', title: 'Grand Lobby' },
    { url: 'assets/room-2.jpg', size: 'standard', title: 'Garden Villa' },
    { url: 'assets/gym.jpg', size: 'standard', title: 'Wellness Center' },
    { url: 'assets/bar.jpg', size: 'tall', title: 'Sunset Bar' },
    { url: 'assets/garden.jpg', size: 'standard', title: 'Tropical Walk' }
  ];

}
