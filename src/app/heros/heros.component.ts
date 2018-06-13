import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  public selectedHero: Hero;

  heroes = HEROS;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

}
