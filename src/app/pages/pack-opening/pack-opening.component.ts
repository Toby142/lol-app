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
}



@Component({
  selector: 'app-pack-opening',
  templateUrl: './pack-opening.component.html',
  styleUrls: ['./pack-opening.component.css']
})
export class PackOpeningComponent {

  champions: Champion[] = [];

  packChamions: Champion[] = [];

  constructor(private http: HttpClient) { }

  getChampions(): void {
    this.http.get<{ data: { [key: string]: Champion } }>('https://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion.json')
      .subscribe(response => {
        this.champions = Object.values(response.data);
        console.log(this.champions);
        this.generatePack();
      }
    );
  }

  ngOnInit(): void {
    this.getChampions();
  }

  generatePack(){
    // get 5 random champions from the list of champions, and put the id of the champion in an array
    // return the array
      const chapionIds = [];

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
          this.packChamions.push(Object.values(response.data)[0]);
          console.log(this.packChamions);
        }
      );
    }






    // if (this.champions.length === 0) {
    //   return [];
    // } else {
    //   const pack = [];
    //   for (let i = 0; i < 5; i++) {
    //     const random = Math.floor(Math.random() * this.champions.length);
    //     pack.push(this.champions[random].id);
    //   }
    //   console.log(pack);
    //   this.names = pack;
    //   return pack;
    // }

    // https://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Talon.png
  }

  getChampion() {

  }

}
