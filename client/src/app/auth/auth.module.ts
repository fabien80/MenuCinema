import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {HomeComponent} from '../home/home.component';
import {FirebaseUIModule} from 'firebaseui-angular';
import {environment} from '../../environments/environment';
import {HomeRoutingModule} from '../home/home-routing.module';
import {MatButtonModule} from '@angular/material';

@NgModule({
    declarations: [
        AuthComponent
    ],
    exports: [
        AuthComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        AuthRoutingModule,
        FirebaseUIModule.forRoot(environment.firebaseUiAuthConfig),
        MatButtonModule,
    ]
})
export class AuthModule {
}
