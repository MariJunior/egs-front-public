import { ApolloClient, ApolloQueryResult, InMemoryCache } from '@apollo/client';
import { QueryOptions } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GQL_API_URI,
  cache: new InMemoryCache(),
});

export function request<T>(options: QueryOptions<T>): Promise<ApolloQueryResult<Partial<T>>> {
  return client.query(options);
}
