import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor

interface Review {
  name: string;
  location: string;
  text: string;
  image: string;
}

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule], // Added CommonModule here
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  
  // Array of 10 international guest reviews
  reviews: Review[] = [
    { name: 'Sarah Jenkins', location: 'London, UK', text: 'An absolute paradise. Seeing the elephants at dawn was life-changing.', image: 'https://i.pravatar.cc/150?u=sj' },
    { name: 'Marco Rossi', location: 'Milan, Italy', text: 'The eco-luxury villas are stunning. Best service in Sri Lanka.', image: 'https://i.pravatar.cc/150?u=mr' },
    { name: 'Elena Garcia', location: 'Madrid, Spain', text: 'A spiritual escape. The wellness spa is world-class.', image: 'https://i.pravatar.cc/150?u=eg' },
    { name: 'David Müller', location: 'Berlin, Germany', text: 'Perfect blend of nature and comfort. Highly recommended!', image: 'https://i.pravatar.cc/150?u=dm' },
    { name: 'Yuki Tanaka', location: 'Tokyo, Japan', text: 'Incredible attention to detail. The food was organic and fresh.', image: 'https://i.pravatar.cc/150?u=yt' },
    { name: 'Chloe Dubois', location: 'Paris, France', text: 'Romantic, secluded, and beautiful. A dream honeymoon stay.', image: 'https://i.pravatar.cc/150?u=cd' },
    { name: 'James Wilson', location: 'Sydney, Australia', text: 'Expert guides and amazing wildlife. Truly an authentic safari.', image: 'https://i.pravatar.cc/150?u=jw' },
    { name: 'Amara Singh', location: 'Mumbai, India', text: 'The architecture is breathtaking. A true gem in the forest.', image: 'https://i.pravatar.cc/150?u=as' },
    { name: 'John Smith', location: 'New York, USA', text: 'Five-star hospitality in the middle of the jungle. Wow!', image: 'https://i.pravatar.cc/150?u=js' },
    { name: 'Lars Berg', location: 'Oslo, Norway', text: 'Clean, green, and serene. The sustainability focus is real.', image: 'https://i.pravatar.cc/150?u=lb' }
  ];

  // Helper for generating 5 stars
  stars = [1, 2, 3, 4, 5];
}