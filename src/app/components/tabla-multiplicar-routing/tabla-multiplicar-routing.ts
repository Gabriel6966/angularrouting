import { Component,ViewChild,ElementRef,OnInit,ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-tabla-multiplicar-routing',
  styleUrl: './tabla-multiplicar-routing.css',
  templateUrl: './tabla-multiplicar-routing.html',
})


export class TablaMultiplicarRouting implements OnInit {
  public numero!: number;
  public resultado: Array<number>

  constructor(private _router: Router,private _activeRoute:ActivatedRoute, private _cdr:ChangeDetectorRef) {
    this.resultado = [];

  }

    goToHome(num: number | null): void {
    if (num !== null) {
      this._router.navigate(['/tabla', num]);
    } else {
      this._router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params)=>{
      if(params['numero']!==null){
        this.numero=parseInt(params['numero'],10);
        this.resultado=[];
        for(let i=1; i<=10; i++){
          this.resultado.push(this.numero*i);
        }
        this._cdr.detectChanges();
      }
    })

  }
}
