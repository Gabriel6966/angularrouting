import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
    private  _activeRoute: ActivatedRoute,
    private  _router: Router,
    private _cdr: ChangeDetectorRef,
  ) {}

  goToHome(num: number | null): void {
    if (num !== null) {
      this._router.navigate(['/doble', num]);
    } else {
      this._router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['numero'] !== null) {
        this.numero = parseInt(params['numero'], 10);
        this.doble = this.numero * 2;
        this._cdr.detectChanges();
      }
    });
  }
}
