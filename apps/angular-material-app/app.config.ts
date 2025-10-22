import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { Environment, provideAbpCore, withOptions } from '@myorg/utility';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAbpCore(
      withOptions({
        environment: {
          application: {
            baseUrl: 'http://localhost:4201',
          },
          apis: {
            default: {
              url: 'https://localhost:44301',
              rootNamespace: 'Lis.Abp'
            }
          }
        } as Environment,
        registerLocaleFn: () => Promise.resolve(),
        sendNullsAsQueryParam: false,
        skipGetAppConfiguration: true,
      })
    ),
  ],
};
