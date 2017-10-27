// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDQQr0hK2sv187jhkjX3xaPiHJl273QimU',
    authDomain: 'fs-ng-items.firebaseapp.com',
    databaseURL: 'https://fs-ng-items.firebaseio.com',
    projectId: 'fs-ng-items',
    storageBucket: 'fs-ng-items.appspot.com',
    messagingSenderId: '786528071894'
  }
};
