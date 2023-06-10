import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Champion {
  name: string;
  title: string;
  blurb: string;
  lore: string;
  image?: Image;
}

interface Image {
  full: string;
  sprite: string;
}


@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent {

  champion: Champion = {
    name: '',
    title: '',
    blurb: '',
    lore: ''
  }

  constructor(private http: HttpClient) { }

  getChampion() {
    const name = window.location.pathname.split('/')[2];
    // console.log('Get champion:  ' + name);
    this.http.get<{ data: { [key: string]: Champion } }>('https://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion/' + name + '.json')
      .subscribe(response => {
        this.champion = Object.values(response.data)[0];
        console.log(this.champion);
      }
    );
    // console.log(this.champion.image);

  }

  getImgUlr() {
    if(this.champion.name !== '') {
    const name = window.location.pathname.split('/')[2];
    return 'https://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/' + name + '.png';
    } else {
      return '';
    }
  }

  // what is the url to get the skin img
  

  // make a funtion called getImgUrl() that returns the url of the image
  // https://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Talon.png

  ngOnInit(): void {
    this.getChampion();
  }


}
