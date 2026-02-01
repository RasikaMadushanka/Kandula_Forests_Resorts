import { Component } from '@angular/core';
import { SafariVideoComponent } from "../../component/safari-video/safari-video.component";
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-safari',
  standalone: true,
  imports: [SafariVideoComponent, NavBarComponent, FooterComponent,CommonModule],
  templateUrl: './safari.component.html',
  styleUrl: './safari.component.css'
})
export class SafariComponent {

  safariImages = [
    { url: 'assets/images/deulex30.jpeg', title: 'Elephant Safari' },
    { url: 'assets/images/safari2.jpeg', title: 'Leopard Watch' },
    { url: 'assets/images/safari3.jpeg', title: 'Jeep Adventure' },
    { url: 'assets/images/safari4.jpeg', title: 'Bird Watching' },
    // Just add more objects to create more cards automatically!
  ];
}
