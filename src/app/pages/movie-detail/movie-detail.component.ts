import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieVideo, Movies } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movies | null = null;
  movieVideos: MovieVideo[] = [];
  constructor(private route: ActivatedRoute, private moviesServices: MoviesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
    });
  }
  getMovie(id: string) {
    this.moviesServices.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }
  getMovieVideos(id: string) {
    this.moviesServices.getMovieVideos(id).subscribe((movieVideosData) => {
      this.movieVideos = movieVideosData;
    });
  }
}
