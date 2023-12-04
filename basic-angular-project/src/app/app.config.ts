import { RxWebApplicationConfig } from '@rxweb/angular-router';
import { RxHttp } from '@rxweb/http';
import { ClientDataStorage } from '@rxweb/storage';

const clientConfig: RxWebApplicationConfig = {
  providers: [
    RxHttp,
    ClientDataStorage
  ]
};

export const config = clientConfig;
