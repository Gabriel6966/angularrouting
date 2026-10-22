import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CineComponent } from './components/cine-component/cine-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { NumeroDoble } from './components/numero-doble/numero-doble';
import { TablaMultiplicarRouting } from './components/tabla-multiplicar-routing/tabla-multiplicar-routing';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cine', component: CineComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'doble', component: NumeroDoble },
  { path: 'doble/:numero', component: NumeroDoble },
  { path: 'tabla/:numero', component: TablaMultiplicarRouting },
  { path: '**', component: NotFoundComponent },
];