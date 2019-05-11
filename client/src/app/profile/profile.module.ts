import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import {ProfileInformationModule} from './profile-information/profile-information.module';
import {ProfileFormModule} from './profile-form/profile-form.module';
import {FormsModule} from '@angular/forms';
import {CommandHistoryModule} from "./command-history/command-history.module";

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        FormsModule,
        ProfileRoutingModule,
        ProfileInformationModule,
        ProfileFormModule,
        CommandHistoryModule
    ], exports: [ProfileComponent]
})
export class ProfileModule {
}
