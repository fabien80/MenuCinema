import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MovieResult, SearchMovieQuery, SearchMovieResponse} from '../../../tmdb-data/searchMovie';
import {TmdbService} from '../../../services/tmdb.service';
import {forEach} from "@angular/router/src/utils/collection";
import {NavBarService} from '../../../services/nav-bar.service';
import {of, Observable, Subject} from 'rxjs';

const maxPage = 1000;

@Component({
  selector: 'app-movie-test',
  templateUrl: './movie-test.component.html',
  styleUrls: ['./movie-test.component.scss']
})
export class MovieTestComponent implements OnInit, OnChanges {

  // sur cette page on a modifié les variable, le constructor, le ngonInit, le ngOnChange, le searchMovie,

  moviesFound: SearchMovieResponse;
  // création des variables pour les utiliser dans la fonction searchstring
  @Input() private _searchString;
  @Input() private _searchRating;
  @Input() private comedie;
  @Input() private aventure;
  @Input() private action;
  @Input() private horreur;


  private _selectedTab = 1;
  private sortName = false;
  private sortScore = false;


  // par defaut on affiche on fait appel a searchmovie pour afficher les topmovie
  constructor(private tmdbService: TmdbService,
              private navBarService: NavBarService) {
    this.searchMovie(this._searchString, this._selectedTab);
  }

  //ici on met en place des subscribe qui interceptent les modifications des variables dans le navbar.service
  ngOnInit() {
    //évement qui se produit quand une recherche est fait dans la search bar
    this.navBarService._SearchStringSubject
        .subscribe(
            data => {
              this._searchString = data;
              this.searchMovie(this._searchString, this._selectedTab);
            },
            err => { console.log('error')},
            () => {
            }
        );
    //évement qui se produit quand une recherche est fait sur les notes
    this.navBarService._searchRatingSubject.subscribe(
            data => {
              this._searchRating = data;
              this.searchMovie(this._searchString, this._selectedTab);
            },
            err => { console.log('error')},
            () => {
            }
        );
    //évement qui se produit quand une recherche sur la catégorie action
    this.navBarService._actionSubject
        .subscribe(
            data => {
              this.action = data;
              this.searchMovie(this._searchString, this._selectedTab);
            },
            err => { console.log('error')},
            () => {
            }
        );
    //évement qui se produit quand une recherche sur la catégorie aventure
    this.navBarService._aventureSubject
        .subscribe(
            data => {
              this.aventure = data;
              this.searchMovie(this._searchString, this._selectedTab);
            },
            err => { console.log('error')},
            () => {
            }
        );
    //évement qui se produit quand une recherche sur la catégorie comédie
    this.navBarService._comedieSubject
        .subscribe(
            data => {
              this.comedie = data;
              this.searchMovie(this._searchString, this._selectedTab);
            },
            err => { console.log('error')},
            () => {
            }
        );
    //évement qui se produit quand une recherche sur la catégorie horreur
    this.navBarService._horreurSubject
        .subscribe(
            data => {
              this.horreur = data;
              this.searchMovie(this._searchString, this._selectedTab);
            },
            err => { console.log('error')},
            () => {
            }
        );
  }

  /**
   * A chaques changements des inputs, effectue une nouvelle recherche, se replace à la première page et remet à false les boolean de tri
   */
  ngOnChanges(changes: SimpleChanges) {
  }


  /**
   * Recherche d'un film en fonction d'une query et d'une page
   * @param query : la phrase ou mot à rechercher
   * @param page : la page selectionné
   */
  //si la query est vide, on fait un appel API a TopMovie, si la query n'est pas vide, on fait un appel API a searchMovie
  public searchMovie(query: string, page: number) {
    if (query !== '' && query !== undefined) {
      const searchMovie: SearchMovieQuery = {
        query,
        region: 'fr',
        page
      };
      this.tmdbService.searchMovie(searchMovie).then((response: SearchMovieResponse) => {
        // ici test
        this.moviesFound = response;
      });
    } else {
      const searchMovie: SearchMovieQuery = { // a finir
        query,
        region: 'fr',
        page
      };
      this.tmdbService.TopMovie(searchMovie, this._searchRating, this.action, this.comedie, this.aventure, this.horreur).then((response: SearchMovieResponse) => { // a finir
        this.moviesFound = response;// a finir
      });
      // this.moviesFound = this.emptyResult; ancienne version
    } // a finir
  }

  /**
   * Passe à l page suivant en restant entre maxPage ou total_page et 1 (avance de façon circulaire)
   */
  public nextTab() {
    if (this._selectedTab === maxPage || this._selectedTab === this.moviesFound.total_pages) {
      this._selectedTab = 1;
    } else {
      this._selectedTab++;
    }

    this.searchMovie(this._searchString, this._selectedTab);

  }

  /**
   * Se place à la denière page (page maxPage maximum)
   */
  public lastTab() {
    if (this.moviesFound.total_pages < maxPage) {
      this._selectedTab = this.moviesFound.total_pages;
    } else {
      this._selectedTab = maxPage;
    }

    this.searchMovie(this._searchString, this._selectedTab);

  }

  /**
   * Retourne à la première page (1)
   */
  public firstTab() {
    this._selectedTab = 1;
    this.searchMovie(this._searchString, this._selectedTab);
  }


  /**
   * Retourne à la page d'avant, (recule de façon circulaire)
   */
  public beforeTab() {
    if (this._selectedTab !== 1) {
      this._selectedTab--;
    } else {
      this._selectedTab = this.moviesFound.total_pages < maxPage ? this.moviesFound.total_pages : maxPage;
    }
    this.searchMovie(this._searchString, this._selectedTab);
  }


  /**
   * En fonction de sortName, tri de façon asc ou desc le nom
   */
  sortWithName() {
    this.moviesFound.results.sort((a: MovieResult, b: MovieResult) => {
      let res: number;
      if (this.sortName) {
        res = ('' + b.title).localeCompare(a.title);

      } else {
        res = ('' + a.title).localeCompare(b.title);
      }
      return res;
    });
    this.sortName = !this.sortName;
  }

  /**
   * En fonction de sortScore, tri de façon asc ou desc le score
   */
  sortWithScore() {
    this.moviesFound.results.sort((a: MovieResult, b: MovieResult) => {
      let res: number;
      if (this.sortScore) {
        res = a.vote_average - b.vote_average;
      } else {
        res = b.vote_average - a.vote_average;
      }
      return res;

    });
    this.sortScore = !this.sortScore;
  }


  get searchString() {
    return this._searchString;
  }

  set searchString(value) {
    this._searchString = value;
  }


  get selectedTab(): number {
    return this._selectedTab;
  }

  set selectedTab(value: number) {
    this._selectedTab = value;
  }

  get searchRating() {
    return this._searchRating;
  }

  set searchRating(value) {
    this._searchRating = value;
  }
}


