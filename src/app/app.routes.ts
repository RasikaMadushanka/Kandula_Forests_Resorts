import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RoomDetailsailsComponent } from './pages/room-detailsails/room-detailsails.component';

export const routes: Routes = [
     { path: '', redirectTo: 'home', pathMatch: 'full' },
   {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'rooms-details/:id',
    component: RoomDetailsailsComponent
  }
    
];
