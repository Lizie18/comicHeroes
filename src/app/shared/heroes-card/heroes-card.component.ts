import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/model/hero.model';

@Component({
	selector: 'app-heroes-card',
	templateUrl: './heroes-card.component.html',
	styleUrls: ['./heroes-card.component.sass']
})
export class HeroesCardComponent implements OnInit {
	@Input() hero: Hero;
	@Input() heroes: any[] = [];
	@Input() page = '';
	@Input() term = '';
	constructor( private route: Router ) {  }

	ngOnInit() { }

	heroView(id, page, term?) {
		if (term) {
			this.route.navigate([ '/hero', id, page, term ]);
		} else {
			console.log('Dentro');
			this.route.navigate([ '/hero', id, page ]);
		}
	}

}
