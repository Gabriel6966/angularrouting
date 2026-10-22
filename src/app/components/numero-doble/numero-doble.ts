import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble',
  styleUrl: './numero-doble.css',
  templateUrl: './numero-doble.html',
})
export class NumeroDoble implements OnInit {
  public doble = 0;
  public numero!: number;

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly router: Router,
  ) {}

  goToHome(num: number | null): void {
    if (num !== null) {
      this.router.navigate(['/doble', num]);
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      if (params['numero'] !== undefined) {
        this.numero = parseInt(params['numero'], 10);
        this.doble = this.numero * 2;
      }
    });
  }
}
