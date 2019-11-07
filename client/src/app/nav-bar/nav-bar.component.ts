import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TmdbService} from '../services/tmdb.service';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {NavBarService} from '../services/nav-bar.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() searchEvent: EventEmitter<string> = new EventEmitter();

// ici on a modifié le  constructor pour faire appel au navbar.service
 // et on a ajouté des fonctions en bas de la page pour transmettre les variables
  constructor(private tmdb: TmdbService,
              public authService: AuthService,
              private router: Router,
              private navbar: NavBarService) {
  }

  ngOnInit(): void {
  }

  private signOut() {
    this.authService.signOut();
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }


  getLogoPath() {
    return `${environment.apiBaseUrl}photo/icon.png`;
  }

  goToHomepage() {
    this.router.navigate(['/homepage']);
  }

  /**
   * A chaque changement de recherche dans la bar de recherche, obtient la nouvelle string recherché
   * @param query : la nouvelle string recherché
   */
  public onSearch(query: string) {
    this.searchString = query;
  }


  get searchString(): string {
    return this.navbar.searchString;
  }

  set searchString(value: string) {
    this.navbar.searchString = value;
  }

  public onRating(query: number) {
    this.navbar.searchRating = query;
  }


  get searchRating(): number {
    return this.navbar.searchRating;
  }

  set searchRating(value: number) {
    this.navbar.searchRating = value;
  }


  rating1() {
    this.navbar.searchRating = 2;
  }
  rating2() {
    this.navbar.searchRating = 4;
  }
  rating3() {
    this.navbar.searchRating = 6;
  }
  rating4() {
    this.navbar.searchRating = 8;
  }
  rating5() {
    this.navbar.searchRating = 9;
  }
  action() {
    if (this.navbar.action) { this.navbar.action = false; } else { this.navbar.action = true; }
  }
  aventure() {
    if (this.navbar.aventure) { this.navbar.aventure = false; } else { this.navbar.aventure = true; }
  }
  comedie() {
    if (this.navbar.comedie) { this.navbar.comedie = false; } else { this.navbar.comedie = true; }
  }
  horreur() {
    if (this.navbar.horreur) { this.navbar.horreur = false; } else { this.navbar.horreur = true; }
  }


}
