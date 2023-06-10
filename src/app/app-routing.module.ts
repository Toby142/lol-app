import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ChampionComponent } from './pages/champion/champion.component';
import { PackOpeningComponent } from './pages/pack-opening/pack-opening.component';

const routes: Routes = [
  { path: 'list', component: ListPageComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'champion/:name', component: ChampionComponent},
  { path: 'pack-opening', component: PackOpeningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
