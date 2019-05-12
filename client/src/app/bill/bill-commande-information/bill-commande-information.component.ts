import {Component, Input, OnInit} from '@angular/core';
import {CommandeInterface} from '../../interface/CommandeInterface';
import {MovieResponse} from '../../tmdb-data/Movie';
import {TmdbService} from '../../services/tmdb.service';
import {ProductGroupInterface} from '../../interface/ProductInterface';
import {MenuInterface} from '../../interface/MenuInterface';
import {FoodInterface} from '../../interface/FoodInterface';
import {MenuClass} from '../../product/menu/menu';
import {MenuGroup} from "../../product/menu/MenuGroup";
import {SearchMenuInterface} from "../../interface/SearchInterface";
import {FoodGroup} from "../../product/food/foodGroup";
import {Food} from "../../product/food/food";
import {Product} from "../../product/class/Product";
import {Movie} from "../../product/movie/Movie";
import {MatDialog} from "@angular/material";
import {AddReviewComponent} from "../../dialogs/add-review/add-review.component";
import {ReviewInterface} from "../../interface/ReviewInterface";
import {ProductType} from "../../enum/ProductType";
import {DBProductType} from "../../enum/DBProductType";
import {ProductService} from "../../product/product.service";

@Component({
    selector: 'app-bill-commande-information',
    templateUrl: './bill-commande-information.component.html',
    styleUrls: ['./bill-commande-information.component.scss']
})
export class BillCommandeInformationComponent implements OnInit {

    @Input() public _order: CommandeInterface;
    private _menus: MenuGroup[] = [];
    private _foods: FoodGroup[] = [];

    private _movies: Movie[] = [];
    private _isActivated = true;

    constructor(private tmdbService: TmdbService,
                private dialog: MatDialog,
                private productService: ProductService) {
    }

    ngOnInit() {
        this._menus = this.fillMenus(this.order.nestedProduct.menus);
        this._foods = this.fillFoods(this.order.nestedProduct.foods);

        this.getAllMovies().then((movies: MovieResponse[]) => {
            movies.forEach(movie => {
                this.movies.push(Movie.fromData(movie));
            })
        });
    }

    private fillMenus(searchMenuInterfaces: SearchMenuInterface[]): MenuGroup[] {
        console.log(searchMenuInterfaces);
        let menus: MenuClass[] = searchMenuInterfaces.reduce((acc: MenuClass[], currentValue: SearchMenuInterface) => {
            acc.push(MenuClass.fromSearchData(currentValue));
            return acc;
        }, []);

        return menus.reduce((acc: MenuGroup[], currentValue: MenuClass) => {
            const menuGroup: MenuGroup[] = acc.filter((value: MenuGroup) => value.product.id == currentValue.id);
            const alreadyExist: boolean = menuGroup.length > 0;
            if (!alreadyExist) {
                acc.push(new MenuGroup(currentValue, 1));
            } else {
                const index = acc.indexOf(menuGroup[0]);
                acc[index].amount++;
            }

            return acc;
        }, [])

    }

    private fillFoods(foodInterfaces: FoodInterface[]): FoodGroup[] {
        const foods: Food[] = foodInterfaces.reduce((acc: Food[], currentValue: FoodInterface) => {
            acc.push(Food.fromData(currentValue));
            return acc;
        }, []);

        return foods.reduce((acc: FoodGroup[], currentValue: Food) => {
            const foodGroup: FoodGroup[] = acc.filter(value => value.product.id == currentValue.id);
            const alreadyExist: boolean = foodGroup.length > 0;
            if (!alreadyExist) {
                acc.push(new FoodGroup(currentValue, 1));
            } else {
                const index = acc.indexOf(foodGroup[0]);
                acc[index].amount++;
            }

            return acc;

        }, [])

    }

    public async getAllMovies(): Promise<MovieResponse[]> {
        const movies: MovieResponse[] = [];
        for (const idFilm of this.order.idFilms) {
            movies.push(await this.getMovie(idFilm));
        }
        return movies;
    }

    public async getMovie(movieId: string): Promise<MovieResponse> {
        return await this.tmdbService.getMovie(parseInt(movieId, 10));
    }


    get menus(): MenuGroup[] {
        return this._menus;
    }

    set menus(value: MenuGroup[]) {
        this._menus = value;
    }

    get foods(): FoodGroup[] {
        return this._foods;
    }

    set foods(value: FoodGroup[]) {
        this._foods = value;
    }

    get movies(): Movie[] {
        return this._movies;
    }

    set movies(value: Movie[]) {
        this._movies = value;
    }

    get isActivated(): boolean {
        return this._isActivated;
    }

    set isActivated(value: boolean) {
        this._isActivated = value;
    }

    get order(): CommandeInterface {
        return this._order;
    }

    set order(value: CommandeInterface) {
        this._order = value;
    }

    public getCoutTotale(productGroup: ProductGroupInterface<FoodInterface | MenuInterface>): number {
        return productGroup.amount * productGroup.product.prix;
    }

    addReview(product: Product) {
        const review: ReviewInterface = {
            note: 0,
            review: '',
            commandeId: this.order.commandeId,
            produitId: product.id.toString(),
            typeProduit: this.productService.productTypeToDBProduct(product.type)
        };
        this.dialog.open(AddReviewComponent, {
            width: "100",
            data: review
        })

    }


}
