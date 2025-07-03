import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../models';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../../services/api-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss'
})
export class Details implements OnInit, OnDestroy{
  public movie!: Movie;
  private routerSub: Subscription = new Subscription();
  private movieSub: Subscription = new Subscription();
  

  constructor(
    private apiservice: ApiService,
    // private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.routerSub = this.activatedRoute.params.subscribe((params: Params) => {
        const titleParam = params['title'] === 'none' ? '' : params['title'];
        const idParam = params['id'] === 'none' ? '' : params['id'];
        console.log('Using title:', titleParam, 'Using id:', idParam);
        if(titleParam || idParam)  {
          this.searchMovie(titleParam, idParam);
        }
      });
  }

  searchMovie(
    t:string,
    i:string
  ): void{
    this.movieSub = this.apiservice.getMovieDetails(t,i).subscribe((movieDetails: Movie) => {
      this.movie = movieDetails;
      console.log(this.movie);
    });
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
    if (this.movieSub) {
      this.movieSub.unsubscribe();
    }
  }
}
