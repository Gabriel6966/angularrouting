import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-menu-component',
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {}
