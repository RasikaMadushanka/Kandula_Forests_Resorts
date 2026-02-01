import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-safari-contactus',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './safari-contactus.component.html',
  styleUrl: './safari-contactus.component.css'
})
export class SafariContactusComponent {
  contact = {
    name: '',
    email: '',
    country: '',
    phone: '',
    message: ''
  };

  sendToWhatsApp() {
    const adminNumber = "94760374379"; 

    // 1. Validate inputs
    if(!this.contact.name || !this.contact.phone || !this.contact.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // 2. Build the message
    const msg = `*NEW SafariBooking INQUIRY*%0A` +
                `--------------------------%0A` +
                `*Client:* ${this.contact.name}%0A` +
                `*Email:* ${this.contact.email}%0A` +
                `*From:* ${this.contact.country}%0A` +
                `*Contact:* ${this.contact.phone}%0A%0A` +
                `*Plan Details:*%0A${this.contact.message}`;

    const waUrl = `https://wa.me/${adminNumber}?text=${msg}`;
    
    // 3. Show Success Message
    alert("Message structured successfully! Redirecting you to WhatsApp...");

    // 4. Redirect
    window.open(waUrl, '_blank');

    // 5. Optional: Reset form after sending
    this.resetForm();
  }

  resetForm() {
    this.contact = { name: '', email: '', country: '', phone: '', message: '' };
  }
}

