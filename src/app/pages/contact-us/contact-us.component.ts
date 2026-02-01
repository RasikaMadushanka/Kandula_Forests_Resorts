import { Component } from '@angular/core';
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NavBarComponent, FooterComponent,CommonModule,FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contact = {
    name: '',
    email: '',
    country: '',
    phone: '',
    message: ''
  };

  sendToWhatsApp() {
    const adminNumber = "947XXXXXXXX"; // Enter your Sri Lankan number here
    
    // Check if basic fields are filled
    if(!this.contact.name || !this.contact.phone) {
      alert("Please enter your name and contact number.");
      return;
    }

    // Structure the WhatsApp message with bold formatting
    const msg = `*NEW TOUR INQUIRY*%0A` +
                `--------------------------%0A` +
                `*Client:* ${this.contact.name}%0A` +
                `*Email:* ${this.contact.email}%0A` +
                `*From:* ${this.contact.country}%0A` +
                `*Contact:* ${this.contact.phone}%0A%0A` +
                `*Plan Details:*%0A${this.contact.message}`;

    const waUrl = `https://wa.me/${adminNumber}?text=${msg}`;
    
    // Redirect user
    window.open(waUrl, '_blank');
  }

}
