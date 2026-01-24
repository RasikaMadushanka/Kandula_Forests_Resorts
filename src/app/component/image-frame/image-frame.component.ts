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
   { url: 'assets/images/en1.jpeg', type: 'type-a' },
    { url: 'assets/images/en2.jpeg', type: 'type-b' },
    { url: 'assets/images/en3.jpeg', type: 'type-a' },
    { url: 'assets/images/en4.jpeg', type: 'type-b' },
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