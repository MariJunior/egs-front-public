import { client } from '../../../pages/apolloClient';
import { GetNewestArticlesDocument, GetNewestArticlesQuery } from 'generated/graphql';
import { newestArticlesResponseToProps } from 'apigql/converters';

export async function queryNewestArticles(start = 0) {
  const result = await client.query<GetNewestArticlesQuery>({
    query: GetNewestArticlesDocument,
    variables: { limit: 5, start },
  });
  return newestArticlesResponseToProps(result);
}
