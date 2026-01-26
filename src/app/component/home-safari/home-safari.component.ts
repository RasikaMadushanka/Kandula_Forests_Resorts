import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-safari',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-safari.component.html',
  styleUrl: './home-safari.component.css'
})
export class HomeSafariComponent {
  // Replace these with your actual image paths
  safariimages = [{ url: '/assets/images/bk1.jpeg', title: 'Wild Safari' }];
  activities = [{ url: '/assets/images/bk1.jpeg', title: 'Adventure' }];
  restaurent = [{ url: '/assets/images/bk1.jpeg', title: 'Dining' }];
  garden = [{ url: '/assets/images/bk1.jpeg', title: 'Nature' }];
  
  // Extra array if you want to fill the 4th small slot or repeat one
  wildlife = [{ url:'/assets/images/bk1.jpeg', title: 'Wildlife' }];
}