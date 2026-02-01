import { Component } from '@angular/core';
import { SafariVideoComponent } from "../../component/safari-video/safari-video.component";
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-safari',
  standalone: true,
  imports: [SafariVideoComponent, NavBarComponent, FooterComponent],
  templateUrl: './safari.component.html',
  styleUrl: './safari.component.css'
})
export class SafariComponent {

}
