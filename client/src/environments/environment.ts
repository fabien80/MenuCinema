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
        tosUrl: '<your-tos-link>',
        privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
        credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
    },
    nbItemsPerRow: 5,
    basketStorageKey: 'basket',
    userStorageKey: 'user',
    userInfosStorageKey: 'userInfos'
};
