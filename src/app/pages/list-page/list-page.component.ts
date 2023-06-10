import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Champion {
  id: string;
  name: string;
  title: string;
  blurb: string;
}

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  champions: Champion[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getChampions();
  }

  getChampions(): void {
    this.http.get<{ data: { [key: string]: Champion } }>('https://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion.json')
      .subscribe(response => {
        this.champions = Object.values(response.data);
        console.log(this.champions);
      }
    );
  }

  checkIfHighlighted(name: string) {
    if (name === 'Talon' || name === 'Ornn') {
      return true;
    }
    return false;
  }

  openChampion(name: string) {
    // console.log('route to champion: ' + name);
    this.router.navigate(['/champion', name]);
  }

}
