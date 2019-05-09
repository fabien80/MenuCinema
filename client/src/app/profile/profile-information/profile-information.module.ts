import {NgModule} from '@angular/core';
import {ProfileInformationComponent} from './profile-information.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProfileInformationRoutingModule} from './profile-information-routing.module';
import { ProfileFormComponent } from '../profile-form/profile-form.component';


@NgModule({
    declarations: [
        ProfileInformationComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProfileInformationRoutingModule
    ], exports: [
        ProfileInformationComponent
    ]

})
export class ProfileInformationModule {
}
