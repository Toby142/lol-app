import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

// import the thing that i need to make api requests
import { HttpClientModule } from '@angular/common/http';
import { ChampionComponent } from './pages/champion/champion.component';
import { PackOpeningComponent } from './pages/pack-opening/pack-opening.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    SearchBarComponent,
    ChampionComponent,
    PackOpeningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
