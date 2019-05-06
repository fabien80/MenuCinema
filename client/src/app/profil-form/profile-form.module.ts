import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {profileFormComponent} from "./profile-form.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        profileFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ], exports: [
        profileFormComponent
    ]
})
export class profileFormModule {
}
