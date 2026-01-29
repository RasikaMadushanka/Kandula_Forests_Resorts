import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

export const routes: Routes = [
    {
    path: 'home',
    component: HomeComponent
    },
    {
        path :'rooms',
        component:RoomsComponent
    }
    
];
