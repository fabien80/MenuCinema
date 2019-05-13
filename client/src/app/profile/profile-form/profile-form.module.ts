import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileFormRoutingModule} from './profile-form-routing.module';
import {ProfileFormComponent} from './profile-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {MDBBootstrapModule} from "angular-bootstrap-md";

@NgModule({
    declarations: [ProfileFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ProfileFormRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MDBBootstrapModule,

    ], exports: [ProfileFormComponent]
})
export class ProfileFormModule {
}
