import { Component, OnInit } from '@angular/core';
import {Restangular} from 'ngx-restangular';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {

  movies;

  constructor(private restangular: Restangular) { }

  ngOnInit() {
    this.restangular.all('movies').customGET('popular', {api_key: environment.api_key, page: 1})
      .toPromise()
      .then((result) => this.movies = result.results)
      .catch((error) => console.log(error));
  }

}
