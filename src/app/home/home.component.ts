import { Component, OnInit } from '@angular/core';
import {Restangular} from 'ngx-restangular';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  movies;

  constructor(private restangular: Restangular) { }

  ngOnInit() {
    this.restangular.all('movie').customGET('popular', {api_key: environment.api_key, page: 1})
      .toPromise()
      .then((result) => this.movies = result.results)
      .catch((error) => console.log(error));
  }

}
