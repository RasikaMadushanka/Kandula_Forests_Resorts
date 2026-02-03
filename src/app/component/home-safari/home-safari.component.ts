import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-safari',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-safari.component.html',
  styleUrl: './home-safari.component.css'
})
export class HomeSafariComponent {
  // Replace these with your actual image paths
  safariimages = [{ url: '/assets/images/safari.jpeg', title: 'Wild Safari' }
    ,{ url:'/assets/images/b5.jpeg', title: 'Wildlife' }
  ];
  activities = [{ url: '/assets/images/bk1.jpeg', title: 'Adventure' }];
  restaurent = [{ url: '/assets/images/bk1.jpeg', title: 'Dining' }];
  garden = [{ url: '/assets/images/en4.jpeg', title: 'Nature' }];
  
  // Extra array if you want to fill the 4th small slot or repeat one
  wildlife = [{ url:'/assets/images/b12.jpeg', title: 'Wildlife' }
 
  ];
}