import {Component, Input, OnInit} from '@angular/core';
import {CommandeInterface} from '../../interface/CommandeInterface';
import {MovieResponse} from '../../tmdb-data/Movie';
import {TmdbService} from '../../services/tmdb.service';
import {FoodGroup} from '../../product/food/foodGroup';
import {ProductGroupInterface} from '../../interface/ProductInterface';
import {MenuInterface} from '../../interface/MenuInterface';
import {FoodInterface} from '../../interface/FoodInterface';
import {SearchMenuInterface} from '../../interface/SearchInterface';
import {MenuClass} from '../../product/menu/menu';

@Component({
    selector: 'app-bill-commande-information',
    templateUrl: './bill-commande-information.component.html',
    styleUrls: ['./bill-commande-information.component.scss']
})
export class BillCommandeInformationComponent implements OnInit {

    @Input() public _order: CommandeInterface;
    @Input() private _menus: ProductGroupInterface<MenuInterface>[];
    @Input() private _foods: ProductGroupInterface<FoodInterface>[];

    private _movies: MovieResponse[];
    private _isActivated = true;

    constructor(private tmdbService: TmdbService) {
    }

    ngOnInit() {
        console.log('Ordeeeeer ');
        console.log(this.order);
        console.log('Nested foood workds fdfdfdfd???');
        console.log(this.order.nestedFood);
        console.log('menuuuuuuuus');
        console.log(this.menus);
        console.log('Fooooooods');
        console.log(this.foods);
        /**this.fillMenus(this.order.nestedFood.menu);
         this.fillFoods(this.order.nestedFood.product);**/

        this.getAllMovies().then((movies: MovieResponse[]) => {
            console.log('Movies !');
            console.log(movies);
            this._movies = movies;
            console.log(this._movies);
        });
    }

    get order(): CommandeInterface {
        return this._order;
    }

    set order(value: CommandeInterface) {
        this._order = value;
    }

    onClick() {
        this._isActivated = !this._isActivated;
    }

    public async getAllMovies(): Promise<MovieResponse[]> {
        const movies: MovieResponse[] = [];
        for (const idFilm of this.order.idFilms) {
            movies.push(await this.getMovie(idFilm));
        }
        return movies;
    }

    public async getMovie(movieId: string): Promise<MovieResponse> {
        const movie = await this.tmdbService.getMovie(parseInt(movieId, 10));
        return movie;
    }

    get menus(): ProductGroupInterface<MenuInterface>[] {
        return this._menus;
    }

    set menus(value: ProductGroupInterface<MenuInterface>[]) {
        this._menus = value;
    }

    get foods(): ProductGroupInterface<FoodInterface>[] {
        return this._foods;
    }

    set foods(value: ProductGroupInterface<FoodInterface>[]) {
        this._foods = value;
    }

    get movies(): MovieResponse[] {
        return this._movies;
    }

    set movies(value: MovieResponse[]) {
        this._movies = value;
    }

    get isActivated(): boolean {
        return this._isActivated;
    }

    set isActivated(value: boolean) {
        this._isActivated = value;
    }

    public getCoutTotale(productGroup: ProductGroupInterface<FoodInterface | MenuInterface>): number {
        return productGroup.amount * productGroup.product.prix;
    }

    toMenuClass(product: MenuInterface): MenuClass {
        return MenuClass.fromData(product);
    }
}
