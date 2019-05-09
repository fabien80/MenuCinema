
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileFormComponent} from './profile-form.component';
import {CanDeactivateGuard} from '../can-deactivate.guard';

const routes: Routes = [
    {path: 'profile', component: ProfileFormComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfilFormRoutingModule {
}
