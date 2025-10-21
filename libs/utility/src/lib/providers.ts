import { makeEnvironmentProviders } from '@angular/core';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withXsrfConfiguration,
} from '@angular/common/http';

export function provideUtilities() {
  const providers = [
    provideHttpClient(
      withInterceptorsFromDi(),
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',
        headerName: 'RequestVerificationToken',
      })
    ),
  ];

  return makeEnvironmentProviders(providers);
}
