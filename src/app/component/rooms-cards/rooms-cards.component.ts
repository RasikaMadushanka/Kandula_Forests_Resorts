import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface Room {
  id: number;
  image: string;
  type: string;
  ac: boolean;
  price: number;
  discount: number;
  description: string;
}

@Component({
  selector: 'app-rooms-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-cards.component.html',
  styleUrl: './rooms-cards.component.css'
})
export class RoomsCardsComponent {
  rooms: Room[] = [
    {
      id:1,
      image: 'assets/images/room-couple.jpg',
      type: 'Couple Room',
      ac: true,
      price: 18000,
      discount: 10,
      description: 'A cozy and romantic space surrounded by nature, perfect for couples seeking comfort and privacy.'

    },
    {
      id:2,
      image: 'assets/images/room-family.jpg',
      type: 'Family Room',
      ac: false,
      price: 25000,
      discount: 15,
      description: 'Spacious room ideal for families, offering peaceful forest views and natural ventilation.'
    },
    {
      id:3,
      image: 'assets/images/room-triple.jpg',
      type: 'Triple Room',
      ac: true,
      price: 22000,
      discount: 5,
      description: 'Comfortable triple room with modern amenities, suitable for small groups and friends.'
    }

  ];
  getFinalPrice(room: Room): number {
    return room.price - (room.price * room.discount) / 100;
  }
}
