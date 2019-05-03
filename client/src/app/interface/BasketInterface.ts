import {FoodInterface} from './FoodInterface';
import {ProductGroupInterface, ProductInterface} from './ProductInterface';
import {MenuInterface} from './MenuInterface';
import {MovieResult} from '../tmdb-data/searchMovie';

export interface BasketInterface {
    foodGroups: ProductGroupInterface<FoodInterface>[];
    menuGroups: ProductGroupInterface<MenuInterface>[];
    movies: MovieResult[];
    total: number;
}


