import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { FormsModule } from '@angular/forms';

// Define interface
interface RoomDetails {
  id: number;
  type: string;
  images: string[];
  ac: boolean;
  price: number;
  discount: number;
  description: string;
  features: string[];
}
interface Booking {
  name: string;
  email: string;
  phone: string;
  guests: number;
  checkin: string;
  checkout: string;
  notes: string;
}

@Component({
  selector: 'app-room-detailsails',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent,FormsModule],
  templateUrl: './room-detailsails.component.html',
  styleUrls: ['./room-detailsails.component.css']
})
export class RoomDetailsailsComponent {
  roomId!: number;
  room!: RoomDetails;
  currentImageIndex: number = 0;

   booking = {
  name: '',
  email: '',
  phone: '',
  country: '',
  roomType: '',
  checkinDate: '',
  checkoutDate: '',
  notes: ''
};

countries = [
  'Sri Lanka',
  'India',
  'United Kingdom',
  'Australia',
  'Canada',
  'Germany',
  'France',
  'China',
  'Japan',
  'Other'
];

  rooms: RoomDetails[] = [
    {
      id: 1,
      type: 'Couple Room',
      images: [
        'assets/images/deulex21.jpeg',
        'assets/images/deulex31.jpeg',
        'assets/images/deulex15.jpeg',
        'assets/images/deulex12.jpeg', 
        'assets/images/washroom14.jpeg',
        'assets/images/washroom17.jpeg',
        'assets/images/washroom16.jpeg',
          'assets/images/view.jpeg',
        'assets/images/en21.jpeg'  // Add more images here
      ],
      ac: true,
      price: 18000,
      discount: 10,
      description: `A cozy and romantic space surrounded by nature, perfect for couples seeking comfort and privacy. 
      Enjoy beautiful forest views, comfortable king-size bed, and serene environment for a perfect getaway.`,
      features: ['Free Wi-Fi', 'Air Conditioning', 'Breakfast Included', 'Mini Bar', 'Garden View']
    },
    {
      id: 2,
      type: 'Family Room',
      images: [
        'assets/images/froom14.jpeg',
        'assets/images/froom20.jpeg',
        'assets/images/froom27.jpeg',
        'assets/images/froom51.jpeg', 
        'assets/images/washroom24.jpeg',
        'assets/images/washroom12.jpeg',
        'assets/images/mirror.jpeg',
          'assets/images/rdesign4.jpeg',
        'assets/images/rdesign28.jpeg'  // Add more images here
      ],
      ac: false,
      price: 25000,
      discount: 15,
      description: `Spacious room ideal for families, offering peaceful forest views and natural ventilation. 
      Equipped with two double beds, a lounge area, and a balcony for family relaxation.`,
      features: ['Free Wi-Fi', 'Non AC', 'Balcony', 'Garden View', 'Extra Bed Available']
    },
    {
      id: 3,
      type: 'Deluxe Room',
      images: [
        'assets/images/deulex18.jpeg',
        'assets/images/deulex12.jpeg',
        'assets/images/deulex25.jpeg',
        'assets/images/deulex30.jpeg', 
        'assets/images/washroom24.jpeg',
        'assets/images/washroom12.jpeg',
        'assets/images/en3.jpeg',
          'assets/images/rdesign4.jpeg',
        'assets/images/rdesign28.jpeg'  // Add more images here
      ],
      ac: true,
      price: 22000,
      discount: 5,
      description: `Comfortable triple room with modern amenities, suitable for small groups and friends. 
      Each room includes three single beds, private bathroom, and entertainment facilities.`,
      features: ['Free Wi-Fi', 'AC', 'Breakfast', 'City View', 'TV & Mini Bar']
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.roomId = Number(this.route.snapshot.paramMap.get('id'));
    this.room = this.rooms.find(r => r.id === this.roomId)!;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.room.images.length;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.room.images.length) % this.room.images.length;
  }

  selectImage(index: number) {
    this.currentImageIndex = index;
  }

  getFinalPrice(): number {
    return this.room.price - (this.room.price * this.room.discount) / 100;
  }




























  // room-detailsails.component.ts

sendWhatsApp() {

  const message = `Hello, I would like to book a room.

Name: ${this.booking.name}
Email: ${this.booking.email}
Phone: ${this.booking.phone}
Country: ${this.booking.country}
Room Type: ${this.booking.roomType}
checkinDate: ${this.booking.checkinDate}
checkoutDate: ${this.booking.checkoutDate}


Notes: ${this.booking.notes || 'None'}
`;

  const encodedMessage = encodeURIComponent(message);

  const whatsappNumber = '94760374379';

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
    '_blank'
  );
}


}
