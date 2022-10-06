/** @type {import('next').NextConfig} */

const withFonts = require('nextjs-fonts');
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig(
  withFonts({
    webpack: (config) => config,
    reactStrictMode: true,
    images: {
      domains: ['storage.yandexcloud.net'],
    },
  }),
  {
    silent: true,
  },
);
