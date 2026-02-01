import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-frame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-frame.component.html',
  styleUrls: ['./image-frame.component.css']
})
export class ImageFrameComponent implements OnInit {
  public resortImages: any[] = [];

  // Your resort images list
  private rawImages = [
    { url: 'assets/images/b1.jpeg', type: 'type-a' },
    { url: 'assets/images/b2.jpeg', type: 'type-b' },
    { url: 'assets/images/b3.jpeg', type: 'type-a' },
    { url: 'assets/images/b4.jpeg', type: 'type-b' },
    { url: 'assets/images/b5.jpeg', type: 'type-a' },
    { url: 'assets/images/b6.jpeg', type: 'type-b' },
    { url: 'assets/images/b7.jpeg', type: 'type-a' },
    { url: 'assets/images/b8.jpeg', type: 'type-b' },
    { url: 'assets/images/b9.jpeg', type: 'type-a' },
    { url: 'assets/images/b10.jpeg', type: 'type-b' },
    { url: 'assets/images/b11.jpeg', type: 'type-a' },
    { url: 'assets/images/b12.jpeg', type: 'type-b' },
    { url: 'assets/images/b13.jpeg', type: 'type-a' },
    { url: 'assets/images/b14.jpeg', type: 'type-b' },
    { url: 'assets/images/b15.jpeg', type: 'type-a' },
    { url: 'assets/images/en16.jpeg', type: 'type-b' },
    { url: 'assets/images/b17.jpeg', type: 'type-a' },
    { url: 'assets/images/b18.jpeg', type: 'type-b' },
    { url: 'assets/images/b19.jpeg', type: 'type-a' },
    { url: 'assets/images/b20.jpeg', type: 'type-b' },
    { url: 'assets/images/b1.jpeg', type: 'type-a' },
    { url: 'assets/images/b2.jpeg', type: 'type-b' },
    { url: 'assets/images/b3.jpeg', type: 'type-a' },
    { url: 'assets/images/b4.jpeg', type: 'type-b' }
  ];

  ngOnInit() {
    // We use exactly 41 images for a perfect bloom (5 center, 12 middle, 24 outer)
    this.resortImages = Array.from({ length: 41 }, (_, i) => ({
      ...this.rawImages[i % this.rawImages.length],
      id: i
    }));
  }

  getLayer(index: number): string {
    if (index < 5) return '1';
    if (index < 17) return '2';
    return '3';
  }
}