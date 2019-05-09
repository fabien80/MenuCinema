import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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
