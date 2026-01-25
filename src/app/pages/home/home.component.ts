import { Component } from '@angular/core';
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { ImageFrameComponent } from "../../component/image-frame/image-frame.component";
import { OverviewComponent } from "../../component/overview/overview.component";
import { HomeRoomsComponent } from '../../component/home-rooms/home-rooms.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, ImageFrameComponent, OverviewComponent,HomeRoomsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
