import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-safaritours',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './safaritours.component.html',
  styleUrl: './safaritours.component.css'
})
export class SafaritoursComponent {
  // Links the #bookingForm from HTML to this TS file
  @ViewChild('bookingForm') bookingForm!: ElementRef;

  // Your WhatsApp number (International format)
  phoneNumber: string = "94760374379"; 

  // Controls whether the booking section is shown or hidden
  isBookingVisible: boolean = false;

  booking = {
    name: '',
    package: '3 Hour Quick Safari',
    date: '',
    people: 1
  };

  /**
   * Called when "Book Now" is clicked on a tour card.
   * Shows the form, auto-selects the package, and scrolls down.
   */
  scrollToForm(packageName: string): void {
    this.isBookingVisible = true;
    this.booking.package = packageName;

    // setTimeout allows Angular to render the *ngIf section before scrolling
    setTimeout(() => {
      if (this.bookingForm) {
        this.bookingForm.nativeElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  }

  /**
   * Validates form and redirects to WhatsApp with booking details.
   */
  sendWhatsApp(): void {
    if (!this.booking.name || !this.booking.date) {
      alert("Please enter your name and date.");
      return;
    }

    const msg = `*---------New Safari Tour Booking---------*%0a` +
                `*Name:* ${this.booking.name}%0a` +
                `*Package:* ${this.booking.package}%0a` +
                `*Date:* ${this.booking.date}%0a` +
                `*Travelers:* ${this.booking.people}`;
    
    const url = `https://wa.me/${this.phoneNumber}?text=${msg}`;
    window.open(url, '_blank');
  }
}