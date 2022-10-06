import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import { client } from '../src/apigql';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
