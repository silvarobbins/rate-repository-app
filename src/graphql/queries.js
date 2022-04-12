import { gql } from '@apollo/client';
import { REPOSITORY_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          ...RepositoryInfo
        }
      }
    }
  }
  ${REPOSITORY_INFO}
`;

export const GET_REPOSITORY = gql`
  query Repository ($id: ID!) {
    repository(id: $id) {
      url
      ...RepositoryInfo
    }
  }
  ${REPOSITORY_INFO}
`;

export const GET_ME = gql`
  query getMe {
    me {
      id
      username
    }
  }
`;