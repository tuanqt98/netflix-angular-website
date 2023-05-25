import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() itemData: Movies | null = null;
  constructor() {}

  ngOnInit(): void {}
}
