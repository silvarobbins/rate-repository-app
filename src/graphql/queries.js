import { gql } from '@apollo/client';
import { REPOSITORY_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          ...RepositoryInfo
        }
        cursor
      }
    }
  }
  ${REPOSITORY_INFO}
`;