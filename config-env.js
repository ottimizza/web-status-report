const fs = require('fs');
// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

function getEnvironmentVariable(key, _default = '') {
  return process.env[key] || _default;
}

function createEnvironementFile() {
  return `export const environment = {
  production: true,
  oauthBaseUrl: '${getEnvironmentVariable('OAUTH2_BASE_URL')}',
  oauthClientId: '${getEnvironmentVariable('OAUTH2_CLIENT_ID')}',
  serviceUrl: '${getEnvironmentVariable('SERVICE_URL')}',
  applicationId: '${getEnvironmentVariable('APPLICATION_ID', 'ottimizza')}',
  portalBaseUrl: '${getEnvironmentVariable('PORTAL_BASE_URL')}',
  supportUrl: '${getEnvironmentVariable('SUPPORT_URL', 'https://suporte.ottimizza.com.br')}',
  firebase: {
    apiKey: '${getEnvironmentVariable('FIREBASE_API_KEY')}',
    authDomain: '${getEnvironmentVariable('FIREBASE_AUTH_DOMAIN')}',
    databaseUrl: '${getEnvironmentVariable('FIREBASE_DATA_URL')}',
    projectId: '${getEnvironmentVariable('FIREBASE_PROJECT_ID')}',
    storageBucket: '${getEnvironmentVariable('FIREBASE_STORAGE_BUCKET')}',
    messagingSenderId: '${getEnvironmentVariable('FIREBASE_MESSAGING_SENDER_ID')}',
    appId: '${getEnvironmentVariable('FIREBASE_API_ID')}',
    measurementId: '${getEnvironmentVariable('FIREBASE_MEASUREMENT_ID')}'
  }
};
`;
}

const environment = getEnvironmentVariable('ENVIRONMENT');
const environmentFile = createEnvironementFile();

console.log(`
  ENVIRONMENT -> ${environment}
  ---
  ${environmentFile}
`);

fs.writeFile(`./src/environments/environment.prod.ts`, environmentFile, err => {
  if (err) {
    console.log(err);
  }
});
