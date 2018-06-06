// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  config: {
    apiKey: 'AIzaSyDNW_nPhGMr-6LlaSntRso2qhk5WDrpyqc',
    authDomain: 'kudos-application.firebaseapp.com',
    databaseURL: 'https://kudos-application.firebaseio.com',
    projectId: 'kudos-application',
    storageBucket: 'kudos-application.appspot.com',
    messagingSenderId: '841527973504'
  }
};
