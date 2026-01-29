import { Component } from '@angular/core';
import { RoomsImageshowComponent } from "../../component/rooms-imageshow/rooms-imageshow.component";
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { RoomsCardsComponent } from "../../component/rooms-cards/rooms-cards.component";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomsImageshowComponent, NavBarComponent, FooterComponent, RoomsCardsComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

}
