import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {HomeComponent} from '../home/home.component';
import {FirebaseUIModule} from 'firebaseui-angular';
import {environment} from '../../environments/environment';

@NgModule({
    declarations: [
        AuthComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        FirebaseUIModule.forRoot(environment.firebaseUiAuthConfig),
    ]
})
export class AuthModule {
}
