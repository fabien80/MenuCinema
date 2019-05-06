import {NgModule} from '@angular/core';
import {ProfileFormComponent} from './profile-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProfilFormRoutingModule} from './profil-form-routing.module';


    declarations: [
        ProfileFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProfilFormRoutingModule
    ], exports: [
        ProfileFormComponent
    ]

})
export class ProfileFormModule {
}
