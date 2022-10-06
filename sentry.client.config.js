// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

if (process.env.NODE_ENV === 'production') {
  const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

  Sentry.init({
    dsn: SENTRY_DSN,
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampler: (samplingContext) => {
      // check if it is browser, they all contain `Mozilla` in their User-Agent
      if (
        samplingContext.request !== undefined &&
        samplingContext.request.headers !== undefined &&
        samplingContext.request.headers['user-agent'] !== undefined &&
        samplingContext.request.headers['user-agent'].toLowerCase().includes('mozilla')
      ) {
        return 1;
      }

      return 0;
    },

    // ...
    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
  });
}
