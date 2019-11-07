// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {firebase, firebaseui} from 'firebaseui-angular';

export const environment = {
    production: false,
    tmdbBaseUrl: 'https://api.themoviedb.org/3/',
    tmdbKey: `040fc302130d6412705f5f025c30dbe1`,
    firebase: {
        apiKey: 'AIzaSyBCf5bgZ3iZiK2DJ95-vArfXroz9e4gt3U\n',
        authDomain: 'menucinema-248cb.firebaseapp.com',
        databaseURL: 'https://menucinema-248cb.firebaseio.com',
        projectId: 'menucinema-248cb',
        storageBucket: 'l3m-menu-cinema.appspot.com',
        messagingSenderId: '654696164371'
    },
    firebaseUiAuthConfig: {
        // signInSuccessUrl: '/homepage',
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            /* {
                 scopes: [
                     'public_profile',
                     'email',
                     'user_likes',
                     'user_friends'
                 ],
                 customParameters: {
                     auth_type: 'reauthenticate'
                 },
                 provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
             },*/
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            {
                requireDisplayName: false,
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
            },
            firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        ],
        credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
    },
    nbItemsPerRow: 5,
    basketStorageKey: 'basket',
    firebaseUserStorageKey: 'firebaseUser',
    apiClientStorageKey: 'apiUser',
    apiBaseUrl: 'http://localhost:8090/',
    proxyBaseUrl: '/api',
    backdropPathBaseUrl: 'https://image.tmdb.org/t/p/original/',
    posterPathBaseUrl: 'https://image.tmdb.org/t/p/w300/'
};
