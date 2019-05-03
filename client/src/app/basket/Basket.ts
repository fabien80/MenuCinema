import {BasketInterface} from '../interface/BasketInterface';
import {FoodGroup} from '../product/food/foodGroup';
import {MenuGroup} from '../product/menu/MenuGroup';
import {Product} from '../product/class/Product';
import {ProductGroupInterface, ProductInterface} from '../interface/ProductInterface';
import {FoodInterface} from '../interface/FoodInterface';
import {MenuInterface} from '../interface/MenuInterface';
import {Movie} from '../product/movie/Movie';
import {MovieResponse} from '../tmdb-data/Movie';

export class Basket implements BasketInterface {
    foodGroups: FoodGroup[];
    menuGroups: MenuGroup[];
    movies: Movie[];
    total: number;

    public static fromData(basketInterface: BasketInterface) {
        const {menuGroups, foodGroups, movies, total} = basketInterface;
        const foodGroupsClas = foodGroups.reduce((acc: FoodGroup[], currentValue: ProductGroupInterface<FoodInterface>) => {
            const foodGroup = FoodGroup.fromData(currentValue);
            acc.push(foodGroup);
            return acc;
        }, []);

        const menuGroupsClass = menuGroups.reduce((acc: MenuGroup[], currentValue: ProductGroupInterface<MenuInterface>) => {
            const menuGroup = MenuGroup.fromData(currentValue);
            acc.push(menuGroup);
            return acc;
        }, []);

        const moviesClass = movies.reduce((acc: Movie[], currentValue: MovieResponse) => {
            const movie = Movie.fromData(currentValue);
            acc.push(movie);
            return acc;
        }, []);

        return new this(foodGroupsClas, menuGroupsClass, moviesClass, total);
    }


    constructor(foodGroups: FoodGroup[], menuGroups: MenuGroup[], movies: Movie[], total: number) {
        this.foodGroups = foodGroups;
        this.menuGroups = menuGroups;
        this.movies = movies;
        this.total = total;
    }
}
