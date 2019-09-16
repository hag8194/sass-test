import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {HomeComponent} from './home/home.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'detail', component: MovieDetailComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
