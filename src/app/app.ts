import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu-component/menu-component';
import { MenuTablaMultiplicarComponent } from './components/menu-tabla-multiplicar-component/menu-tabla-multiplicar-component';

@Component({
  imports: [MenuComponent, MenuTablaMultiplicarComponent, RouterOutlet],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angularrouting');
}
