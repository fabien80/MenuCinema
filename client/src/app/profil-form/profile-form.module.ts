import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {profileFormComponent} from "./profile-form.component";

@NgModule({
    declarations: [
        profileFormComponent
    ],
    imports: [
        CommonModule
    ], exports: [
        profileFormComponent
    ]
})
export class profileFormModule {
}
