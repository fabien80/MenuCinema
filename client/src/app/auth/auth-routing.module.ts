import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
    {path: 'homepage', component: HomeComponent}
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
