import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Champion {
  id: string;
  name: string;
  title: string;
  blurb: string;
  skins: Skins[];
}

interface Skins {
  num: number;
  name: string;
}



@Component({
  selector: 'app-pack-opening',
  templateUrl: './pack-opening.component.html',
  styleUrls: ['./pack-opening.component.css']
})
export class PackOpeningComponent {

  champions: Champion[] = [];
  packChampions: Champion[] = [];
  packSkins: number[] = [];

  statusMessage: string = '';

  constructor(private http: HttpClient) { }

  getChampions(): void {
    this.http.get<{ data: { [key: string]: Champion } }>('https://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion.json')
      .subscribe(response => {
        this.champions = Object.values(response.data);
        console.log(this.champions);
      }
    );
  }

  ngOnInit(): void {
    this.getChampions();
  }

  generatePack(){
    const chapionIds = [];
    this.packChampions = [];
    this.packSkins = [];

    if (this.champions.length !== 0) {
      // get 5 random champions from the list of champions, and put the id of the champion in an array
      for (let i = 0; i < 5; i++) {
        const random = Math.floor(Math.random() * this.champions.length);
        chapionIds.push(this.champions[random].id);
      }
      console.log(chapionIds);
    }
    
    for(let i = 0; i < chapionIds.length; i++) {
      this.http.get<{ data: { [key: string]: Champion } }>('https://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion/' + chapionIds[i] + '.json')
      .subscribe(response => {
          this.packChampions.push(Object.values(response.data)[0]);
          console.log(this.packChampions);
          if ( this.packChampions.length < 4) {
            // default skin
            this.packSkins.push(0);
          } else {
            // random skin that can't be 0
            let random = Math.floor(Math.random() * Object.values(response.data)[0].skins.length);
            if (random === 0) {
              random++;
            }
            this.packSkins.push(random);
          }
        }
      );
    }
  }

  getSkinUrl(championId: string, skin: number): string {
    return 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + championId + '_' + skin + '.jpg';
  }
}
