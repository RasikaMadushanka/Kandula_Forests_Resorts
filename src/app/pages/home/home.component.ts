import { Component } from '@angular/core';
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { ImageFrameComponent } from "../../component/image-frame/image-frame.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, ImageFrameComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
