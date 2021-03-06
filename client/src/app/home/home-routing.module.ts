import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuard} from '../auth/auth.guard';

const routes: Routes = [
    {
        path: 'homepage',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
