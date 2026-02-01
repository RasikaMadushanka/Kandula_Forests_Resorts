import { Component } from '@angular/core';
import { SafariVideoComponent } from "../../component/safari-video/safari-video.component";
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { SafariContactusComponent } from "../../component/safari-contactus/safari-contactus.component";

@Component({
  selector: 'app-safari',
  standalone: true,
  imports: [SafariVideoComponent, NavBarComponent, FooterComponent, CommonModule, SafariContactusComponent],
  templateUrl: './safari.component.html',
  styleUrl: './safari.component.css'
})
export class SafariComponent {

  safariImages = [
    { url: 'assets/images/b1.jpeg', title: 'Elephant Safari' },
    { url: 'assets/images/b2.jpeg', title: 'Leopard Watch' },
    { url: 'assets/images/b3.jpeg', title: 'Jeep Adventure' },
    { url: 'assets/images/b4.jpeg', title: 'Bird Watching' },
     { url: 'assets/images/b5.jpeg', title: 'Elephant Safari' },
    { url: 'assets/images/b6.jpeg', title: 'Leopard Watch' },
    { url: 'assets/images/b7.jpeg', title: 'Jeep Adventure' },
    { url: 'assets/images/b8.jpeg', title: 'Bird Watching' },
     { url: 'assets/images/b9.jpeg', title: 'Elephant Safari' },
    { url: 'assets/images/b10.jpeg', title: 'Leopard Watch' },
    { url: 'assets/images/b11.jpeg', title: 'Jeep Adventure' },
    { url: 'assets/images/b12.jpeg', title: 'Bird Watching' },
     { url: 'assets/images/b13.jpeg', title: 'Jeep Adventure' },
    { url: 'assets/images/b14.jpeg', title: 'Bird Watching' },
     { url: 'assets/images/b15.jpeg', title: 'Elephant Safari' },
    { url: 'assets/images/b16.jpeg', title: 'Leopard Watch' },
    { url: 'assets/images/b17.jpeg', title: 'Jeep Adventure' },
    { url: 'assets/images/b18.jpeg', title: 'Bird Watching' },
    { url: 'assets/images/b19.jpeg', title: 'Jeep Adventure' },
    { url: 'assets/images/b20.jpeg', title: 'Bird Watching' },
        { url: 'assets/images/safari.jpeg', title: 'Jeep Adventure' },
    { url: 'assets/images/restaurent2.jpeg', title: 'Bird Watching' },
    { url: 'assets/images/restaurent6.jpeg', title: 'Jeep Adventure' },
    { url: 'assets/images/restaurent15.jpeg', title: 'Bird Watching' },
    
  ];
}
