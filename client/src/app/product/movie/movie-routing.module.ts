import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieComponent} from './movie.component';
import {AuthGuard} from '../../auth/auth.guard';

const routes: Routes = [
    {path: 'movie/:id', canActivate: [AuthGuard], component: MovieComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule {
}
