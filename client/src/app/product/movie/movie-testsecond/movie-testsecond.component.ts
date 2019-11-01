import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TmdbService} from '../../../services/tmdb.service';

@Component({
  selector: 'app-movie-testsecond',
  templateUrl: './movie-testsecond.component.html',
  styleUrls: ['./movie-testsecond.component.scss']
})
export class MovieTestsecondComponent implements OnInit {
  @Input()  private moviesTitle;
  @Input()  private moviesOverview;
  @Input()  private moviesVote_average;
  @Input()  private moviesPoster_path;
  constructor(private tmdbService: TmdbService) {
  }

  ngOnInit() {
  }

}
