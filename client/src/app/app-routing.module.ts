import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {HomeComponent} from './home/home.component';
import {MovieComponent} from './product/movie/movie.component';
import {profileFormComponent} from "./profil-form/profile-form.component";

const routes: Routes = [
    {path: 'profile', component: profileFormComponent},
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {path: '**', redirectTo: 'homepage', pathMatch: "full"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
