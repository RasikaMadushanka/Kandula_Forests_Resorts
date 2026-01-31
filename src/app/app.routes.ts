import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RoomDetailsailsComponent } from './pages/room-detailsails/room-detailsails.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

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
  },
  {
    path:'about-us',
    component:AboutUsComponent
  }
    
];
