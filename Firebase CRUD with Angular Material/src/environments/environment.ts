// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyDRWzx_sDAuotjMT9BCUX-TQiS5tAjA8f0',
    authDomain: 'amcrud-92331.firebaseapp.com',
    databaseURL: 'https://amcrud-92331.firebaseio.com',
    projectId: 'amcrud-92331',
    storageBucket: 'amcrud-92331.appspot.com',
    messagingSenderId: '803205292093'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
