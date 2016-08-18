import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from './hero.service';
import { Hero } from './Hero';

@Component({
  inputs: ['hero'],
  templateUrl: 'app/herodetails.html',
  selector: 'hero-details',
  styleUrls: ['app/herodetails.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params)=> {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }

  goBack() {
    window.history.back();
  }
}
