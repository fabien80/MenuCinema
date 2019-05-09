import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileFormRoutingModule} from './profile-form-routing.module';
import {ProfileFormComponent} from './profile-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [ProfileFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ProfileFormRoutingModule,

    ], exports: [ProfileFormComponent]
})
export class ProfileFormModule {
}
