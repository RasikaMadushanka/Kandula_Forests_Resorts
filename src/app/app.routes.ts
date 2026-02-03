import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RoomDetailsailsComponent } from './pages/room-detailsails/room-detailsails.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SafariComponent } from './pages/safari/safari.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SafaritoursComponent } from './pages/safaritours/safaritours.component';

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
  },
   {
    path:'contact-us',
    component:ContactUsComponent
  },
   {
    path:'safari',
    component:SafariComponent
  },
  {
  path:'gallery',
  component:GalleryComponent
  },
  {
    path:'safari-tour',
    component:SafaritoursComponent
  }
];
