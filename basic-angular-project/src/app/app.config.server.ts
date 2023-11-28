import { mergeApplicationConfig, ApplicationConfig } from '@rxweb/angular-router';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig as clientConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

const appConfig: ApplicationConfig = {
  
  providers: []
};

export const config = mergeApplicationConfig(clientConfig, appConfig, serverConfig);
