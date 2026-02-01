import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Room {
  id: number;
  image: string[];
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
  imports: [CommonModule, RouterModule],
  templateUrl: './rooms-cards.component.html',
  styleUrl: './rooms-cards.component.css'
})
export class RoomsCardsComponent {
  rooms: Room[] = [
    {
      id: 1,
      image: [
        'assets/images/deulex31.jpeg',
        'assets/images/deulex25.jpeg',
        'assets/images/deulex23.jpeg',
        'assets/images/deulex30.jpeg',
        'assets/images/washroom22.jpeg',
        'assets/images/washroom23.jpeg',
        'assets/images/deulex10.jpeg',
        'assets/images/deulex14.jpeg',
        'assets/images/promote6.jpeg',
        'assets/images/rdesign9.jpeg',
        'assets/images/rdesign10.jpeg',
        'assets/images/rdesign11.jpeg'



      ],
      type: 'Couple Room',
      ac: true,
      price: 18000,
      discount: 10,
      description: 'A cozy and romantic space surrounded by nature, perfect for couples seeking comfort and privacy.',
      currentImage: 0
    },
    {
      id: 2,
      image: [
         'assets/images/froom25.jpeg',
        'assets/images/froom26.jpeg',
        'assets/images/froom30.jpeg',
        'assets/images/froom35.jpeg',
        'assets/images/froom36.jpeg',
        'assets/images/froom17.jpeg',
        'assets/images/froom41.jpeg',
        'assets/images/washroom22.jpeg',
        'assets/images/washroom19.jpeg',
         'assets/images/washroom6.jpeg',
        'assets/images/froom50.jpeg',
        'assets/images/froom32.jpeg',
        'assets/images/rdesign5.jpeg',
        'assets/images/rdesign20.jpeg',
        'assets/images/rdesign21.jpeg',
        'assets/images/rdesign30.jpeg',
        'assets/images/view2.jpeg',

      ],
      type: 'Family Room',
      ac: false,
      price: 25000,
      discount: 15,
      description: 'Spacious room ideal for families, offering peaceful forest views and natural ventilation.',
      currentImage: 0
    },
    {
      id: 3,
      image: [
         'assets/images/deulex14.jpeg',
        'assets/images/deulex15.jpeg',
        'assets/images/deulex19.jpeg',
        'assets/images/deulex20.jpeg',
        'assets/images/washroom15.jpeg',
        'assets/images/washroom14.jpeg',
        'assets/images/washroom12.jpeg',
        'assets/images/washroom10.jpeg',
        'assets/images/deulex5.jpeg',
        'assets/images/deulex3.jpeg',
        'assets/images/promote3.jpeg',
        'assets/images/rdesign8.jpeg',
        'assets/images/rdesign7.jpeg',
        'assets/images/rdesign2.jpeg',
        'assets/images/view.jpeg',
        'assets/images/view1.jpeg',

      ],
      type: 'Deluxe Room',
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

