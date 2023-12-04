import { RxWebApplicationConfig } from '@rxweb/angular-router';
import { RxHttp } from '@rxweb/http';
import { ClientDataStorage } from '@rxweb/storage';

const serverConfig: RxWebApplicationConfig = {
  providers: [
    RxHttp,
    ClientDataStorage
  ]
};

export const config = serverConfig;
