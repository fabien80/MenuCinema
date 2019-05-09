import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
    providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate) {
        console.log('ici');
        return false;
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
