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
    'assets/images/rdesign26.jpeg',
    'assets/images/restaurent17.jpeg',
    'assets/images/en3.jpeg',
    'assets/images/promote5.jpeg',
     'assets/images/view.jpeg',
    'assets/images/deulex4.jpeg',
    'assets/images/deulex5.jpeg',
    'assets/images/hotelview2.jpeg',
    'assets/images/deulex6.jpeg',
    'assets/images/deulex7.jpeg',
    'assets/images/froom21.jpeg',
    'assets/images/froom22.jpeg',
    'assets/images/froom13.jpeg',
    'assets/images/froom30.jpeg',
    'assets/images/froom13.jpeg',
    'assets/images/froom15.jpeg',
    'assets/images/garden8.jpeg',
    'assets/images/froom16.jpeg',
    'assets/images/deulex19.jpeg',
    'assets/images/deulex21.jpeg',
    'assets/images/deulex23.jpeg',
    'assets/images/deulex24.jpeg',
     'assets/images/garden22.jpeg'


  ]
}
