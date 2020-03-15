import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {MovieListComponent} from './movies/movie-list/movie-list.component';

const routes: Routes = [
  {path: '', component: MovieListComponent},
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
