import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductModule} from '../product/product.module';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from '../auth/auth.component';
import {HomeComponent} from './home.component';
import {MovieComponent} from '../product/movie/movie.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {path: 'movie/:id', component: MovieComponent}

];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
