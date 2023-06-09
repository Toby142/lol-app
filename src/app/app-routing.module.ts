import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ChampionComponent } from './pages/champion/champion.component';

const routes: Routes = [
  { path: 'list', component: ListPageComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'champion/:name', component: ChampionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
