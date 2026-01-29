import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-detailsails',
  standalone: true,
  imports: [],
  templateUrl: './room-detailsails.component.html',
  styleUrl: './room-detailsails.component.css'
})
export class RoomDetailsailsComponent {

  roomId!: number;

  constructor(private route: ActivatedRoute) {
    this.roomId = Number(this.route.snapshot.paramMap.get('id'));
  }

}
