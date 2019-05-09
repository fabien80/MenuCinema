import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import {ProfileInformationModule} from './profile-information/profile-information.module';
import {ProfileFormModule} from './profile-form/profile-form.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        FormsModule,
        ProfileRoutingModule,
        ProfileInformationModule,
        ProfileFormModule
    ], exports: [ProfileComponent]
})
export class ProfileModule {
}
