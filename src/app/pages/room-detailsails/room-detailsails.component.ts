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

   booking: Booking = {
    name: '',
    email: '',
    phone: '',
    guests: 1,
    checkin: '',
    checkout: '',
    notes: ''
  };

  rooms: RoomDetails[] = [
    {
      id: 1,
      type: 'Couple Room',
      images: [
        'assets/images/r2.jpeg',
        'assets/images/r3.jpeg',
        'assets/images/r4.jpeg',
        'assets/images/r11.jpeg'  // Add more images here
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
        'assets/images/r5.jpeg',
        'assets/images/r6.jpeg',
        'assets/images/r7.jpeg',
        'assets/images/r12.jpeg'
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
        'assets/images/r8.jpeg',
        'assets/images/r9.jpeg',
        'assets/images/r10.jpeg',
        'assets/images/r13.jpeg'
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
  // Construct message
  const message = `Hello, I would like to book the ${this.room.type}.\n
Name: ${this.booking.name}
Email: ${this.booking.email}
Phone: ${this.booking.phone}
Guests: ${this.booking.guests}
Check-in: ${this.booking.checkin}
Check-out: ${this.booking.checkout}
Notes: ${this.booking.notes}`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // WhatsApp number (replace with your number in international format, without +)
  const whatsappNumber = '947XXXXXXXX'; 

  // Open WhatsApp
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
}

}
