import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieComponent} from './movie/movie.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const routes = [
  {path: 'movie/:id', component: MovieComponent}
];

@NgModule({
  declarations: [
    MovieListComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    MovieListComponent
  ]
})
export class MoviesModule { }
