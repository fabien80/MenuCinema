import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  private _searchString: string;
  private _searchRating: number;
  _searchRatingSubject = new Subject<number>();
  private _action: boolean;
  _actionSubject = new Subject<boolean>();
  private _aventure: boolean;
  _aventureSubject = new Subject<boolean>();
  private _comedie: boolean;
  _comedieSubject = new Subject<boolean>();
  private _horreur: boolean;
  _horreurSubject = new Subject<boolean>();
  _SearchStringSubject = new Subject<string>();




  constructor() {
    this._searchString ='';
    this._searchRating = 0;
    this._action = false;
    this._aventure = false;
    this._comedie = false;
    this._horreur = false;
  }



  get searchString(): string {
    return this._searchString;
  }

  set searchString(value: string){
    this._searchString = value;
    this._SearchStringSubject.next(value);
  }

  get aventure(): boolean {
    return this._aventure;
  }

  set aventure(value: boolean) {
    this._aventure = value;
    this._aventureSubject.next(value);
  }
  get action(): boolean {
    return this._action;
  }

  set action(value: boolean) {
    this._action = value;
    this._actionSubject.next(value);
  }
  get searchRating(): number {
    return this._searchRating;
  }

  set searchRating(value: number) {
    this._searchRating = value;
    this._searchRatingSubject.next(value);
  }

  get horreur(): boolean {
    return this._horreur;
  }

  set horreur(value: boolean) {
    this._horreur = value;
    this._horreurSubject.next(value);
  }
  get comedie(): boolean {
    return this._comedie;
  }

  set comedie(value: boolean) {
    this._comedie = value;
    this._comedieSubject.next(value);
  }

}
