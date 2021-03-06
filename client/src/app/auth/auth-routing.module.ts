import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {HomeComponent} from '../home/home.component';
import {HomeRoutingModule} from '../home/home-routing.module';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
    {path: 'login', component: AuthComponent}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})


export class AuthRoutingModule {
}
