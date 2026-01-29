import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Room {
  id: number;
  image: string [];
  type: string;
  ac: boolean;
  price: number;
  discount: number;
  description: string;
   currentImage?: number;
}

@Component({
  selector: 'app-rooms-cards',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './rooms-cards.component.html',
  styleUrl: './rooms-cards.component.css'
})
export class RoomsCardsComponent {
  rooms: Room[] = [
    {
      id:1,
      image:[ 'assets/images/r2.jpeg',
        'assets/images/r2.jpeg'

      ],
      type: 'Couple Room',
      ac: true,
      price: 18000,
      discount: 10,
      description: 'A cozy and romantic space surrounded by nature, perfect for couples seeking comfort and privacy.',
      currentImage: 0
    },
    {
      id:2,
      image:[ 'assets/images/r2.jpeg',
        'assets/images/r2.jpeg'

      ],
      type: 'Family Room',
      ac: false,
      price: 25000,
      discount: 15,
      description: 'Spacious room ideal for families, offering peaceful forest views and natural ventilation.',
      currentImage: 0
    },
    {
      id:3,
      image:[ 'assets/images/r2.jpeg',
        'assets/images/r2.jpeg'

      ],
      type: 'Triple Room',
      ac: true,
      price: 22000,
      discount: 5,
      description: 'Comfortable triple room with modern amenities, suitable for small groups and friends.',
      currentImage: 0
    },
     {
      id:4,
      image:[ 'assets/images/r2.jpeg',
        'assets/images/r2.jpeg'

      ],
      type: 'Couple Room',
      ac: true,
      price: 18000,
      discount: 10,
      description: 'A cozy and romantic space surrounded by nature, perfect for couples seeking comfort and privacy.',
      currentImage: 0
    },
    {
      id:5,
      image:[ 'assets/images/r2.jpeg',
        'assets/images/r2.jpeg'

      ],
      type: 'Family Room',
      ac: false,
      price: 25000,
      discount: 15,
      description: 'Spacious room ideal for families, offering peaceful forest views and natural ventilation.',
      currentImage: 0
    },
    {
      id:6,
      image:[ 'assets/images/r2.jpeg',
        'assets/images/r2.jpeg'

      ],
      type: 'Triple Room',
      ac: true,
      price: 22000,
      discount: 5,
      description: 'Comfortable triple room with modern amenities, suitable for small groups and friends.',
      currentImage: 0
    }

  ];
  getFinalPrice(room: Room): number {
    return room.price - (room.price * room.discount) / 100;
  }
  nextImage(room: Room) {
  room.currentImage = (room.currentImage! + 1) % room.image.length;
}

prevImage(room: Room) {
  room.currentImage = (room.currentImage! - 1 + room.image.length) % room.image.length;
}

}

