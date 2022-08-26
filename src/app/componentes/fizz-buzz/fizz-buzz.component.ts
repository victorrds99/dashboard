import { FizzBuzzService } from './../../servicos/fizz-buzz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent implements OnInit {

  limite:number = 15;
  resultado: string[] = [];

  constructor(private FizzBuzzService: FizzBuzzService) { }

  ngOnInit(): void {
  }

  setLimite($event: any) {
    this.limite = $event.target.value;
    
    if ($event.keyCode !== 13){
      this.resultado = []
    }
  }

  gerar($event: any) {
    $event.preventDefault();
    this.resultado = this.FizzBuzzService.gerar(this.limite);
  }
}
