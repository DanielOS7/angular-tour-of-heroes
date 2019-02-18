import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  char = null;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
  .subscribe(heroes => this.heroes = heroes);
  }

  addHero(name: string): void {
    name = name.trim();
    if (!name) { return;}
    this.heroService.addHero({ name } as Hero) /*{} as Hero added as error stated "name" is not assignable to parameter of type 'Hero' maybe
    because it is missing an "id".*/
    .subscribe(hero => {this.heroes.push(hero);
    });
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero); /* Show everything that is not equal to the selected hero */
    this.heroService.deleteHero(hero)
    .subscribe();
  }

  clicked(name) {
    this.char = name;
    console.log(name);
  }


}