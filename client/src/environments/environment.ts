// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {firebase, firebaseui} from 'firebaseui-angular';

export const environment = {
    production: false,
    tmdbKey: `040fc302130d6412705f5f025c30dbe1`,
    firebase: {
        apiKey: 'AIzaSyBHHHbXlleq_10r6PEC-cXu0VkiFa0c2d8',
        authDomain: 'l3m-menu-cinema.firebaseapp.com',
        databaseURL: 'https://l3m-menu-cinema.firebaseio.com',
        projectId: 'l3m-menu-cinema',
        storageBucket: 'l3m-menu-cinema.appspot.com',
        messagingSenderId: '654696164371'
    },
    nbItemsPerRow: 5
};
