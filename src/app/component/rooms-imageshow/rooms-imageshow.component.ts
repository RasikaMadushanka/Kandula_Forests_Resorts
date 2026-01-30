import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms-imageshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-imageshow.component.html',
  styleUrl: './rooms-imageshow.component.css'
})
export class RoomsImageshowComponent {
  images: string[] = [
    'assets/images/r2.jpeg',
    'assets/images/r3.jpeg',
    'assets/images/r4.jpeg',
    'assets/images/r5.jpeg',
    'assets/images/r6.jpeg',
    'assets/images/r7.jpeg',
    'assets/images/r8.jpeg',
    'assets/images/r9.jpeg',
    'assets/images/r10.jpeg',
    'assets/images/r11.jpeg',
    'assets/images/r12.jpeg',
    'assets/images/r13.jpeg',
    'assets/images/r14.jpeg',
    'assets/images/r15.jpeg',
    'assets/images/r16.jpeg'


  ]
}
