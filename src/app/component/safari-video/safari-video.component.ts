import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-safari-video',
  standalone: true,
  imports: [],
  templateUrl: './safari-video.component.html',
  styleUrl: './safari-video.component.css'
})
export class SafariVideoComponent implements AfterViewInit {
  // This connects the #videoPlayer in your HTML to this TypeScript file
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.videoPlayer.nativeElement;
    
    // Explicitly muting via JS is the safest way to bypass Safari/Chrome blocks
    video.muted = true;
    
    // We play the video after the view has fully loaded
    video.play().catch(error => {
      console.warn("Autoplay prevented: ", error);
    });
  }
}