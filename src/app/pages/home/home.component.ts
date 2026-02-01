import { Component } from '@angular/core';
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { ImageFrameComponent } from "../../component/image-frame/image-frame.component";
import { OverviewComponent } from "../../component/overview/overview.component";
import { HomeRoomsComponent } from '../../component/home-rooms/home-rooms.component';
import { HomeSafariComponent } from '../../component/home-safari/home-safari.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { ReviewComponent } from "../../component/review/review.component";
import { RoomsImageshowComponent } from "../../component/rooms-imageshow/rooms-imageshow.component";
import { SafariVideoComponent } from "../../component/safari-video/safari-video.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, ImageFrameComponent, OverviewComponent, HomeRoomsComponent, HomeSafariComponent, FooterComponent, ReviewComponent, ReviewComponent, RoomsImageshowComponent, SafariVideoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
