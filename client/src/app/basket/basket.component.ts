import {Component, OnInit} from '@angular/core';
import {BasketService} from './basket.service';
import {BasketInterface} from '../interface/BasketInterface';
import {FoodService} from '../product/food/food.service';
import {MenuService} from '../product/menu/menu.service';
import {Basket} from './Basket';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {GenericDialogModule} from '../dialogs/generic-dialog/generic-dialog.module';
import {CommandeDialogComponent} from '../dialogs/commande-dialog/commande-dialog.component';
import {GenericDialogComponent} from '../dialogs/generic-dialog/generic-dialog.component';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
    private basket: Basket;

    constructor(private basketService: BasketService,
                private foodService: FoodService,
                private menuService: MenuService,
                private router: Router,
                private dialog: MatDialog) {
        this.basketService.basket.subscribe((basket: Basket) => {
            this.basket = basket;
        });
    }

    ngOnInit() {

    }

    amountChange() {
        this.basketService.setBasketValue(this.basket);
        this.basketService.basket.next(this.basket);

    }

    clearBasket() {
        this.basketService.clear();
    }

    removeFoodGroup(index: number) {
        this.basketService.removeFoodGroupByIndex(index);
    }

    removeMenuGroup(index: number) {
        this.basketService.removeMenuGroupByIndex(index);
    }

    removeMovie(index: number) {
        this.basketService.removeMovieByIndex(index);
    }

    goToMoviePage(id: number) {
        this.router.navigate([`movie/${id}`]);
    }

    checkBasket() {
        let msg = '';
        if (this.basket.movies.length === 0) {
            msg += `Il vous faut au moins un film pour valider votre panier.`;
        }

        if (this.basket.foodGroups.length === 0 && this.basket.menuGroups.length === 0) {
            msg += '\n Il vous faut au moins un menu ou de la nourriture pour valider votre panier. ';
        }

        if (msg !== '') {
            throw new Error(msg);
        }

        console.log(msg);
    }


    submitBasket() {
        try {
            this.checkBasket();
            this.dialog.open(CommandeDialogComponent, {
                width: '250',
                data: this.basket
            });

        } catch (e) {
            this.dialog.open(GenericDialogComponent, {
                width: '250',
                data: e
            });
        }


    }

}

