import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { App } from './app';
import { routes } from './app.routing';
import { CineComponent } from './components/cine-component/cine-component';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { NumeroDoble } from './components/numero-doble/numero-doble';
import { TablaMultiplicarRouting } from './components/tabla-multiplicar-routing/tabla-multiplicar-routing';
import { FormsModule } from '@angular/forms';
import { MenuTablaMultiplicarComponent } from './components/menu-tabla-multiplicar-component/menu-tabla-multiplicar-component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    App,
    HomeComponent,
    CineComponent,
    MusicaComponent,
    NotFoundComponent,
    MenuComponent,
    NumeroDoble,
    TablaMultiplicarRouting,
    MenuTablaMultiplicarComponent,
    RouterModule.forRoot(routes),
  ],
  providers: [provideBrowserGlobalErrorListeners(), FormsModule],
  bootstrap: [App],
})
export class AppModule {}
