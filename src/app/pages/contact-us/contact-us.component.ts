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
    const adminNumber = "947XXXXXXXX"; 

    // 1. Validate inputs
    if(!this.contact.name || !this.contact.phone || !this.contact.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // 2. Build the message
    const msg = `*NEW TOUR INQUIRY*%0A` +
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

