// Import with `const Sentry = require("@sentry/node");` if you are using CJS
import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
  dsn:
    'https://af99dea82fe1b54e2daf2b2a8d0c2d69@o4507333503090688.ingest.de.sentry.io/4507333506891856',
  integrations: [nodeProfilingIntegration()],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions

  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});
