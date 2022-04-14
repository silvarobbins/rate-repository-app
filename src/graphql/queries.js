import { gql } from '@apollo/client';
import { REPOSITORY_INFO, PAGE_INFORMATION, REVIEW_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories (
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      totalCount
      edges {
        node {
          ...RepositoryInfo
        }
        cursor
      }
      pageInfo {
        ...PageInformation
      }
    }
  }
  ${REPOSITORY_INFO}
  ${PAGE_INFORMATION}
`;

export const GET_REPOSITORY = gql`
  query Repository (
    $id: ID!,
    $first: Int,
    $after: String) {
    repository(id: $id) {
      url
      ...RepositoryInfo
      reviews (first: $first, after: $after) {
        edges {
          node {
            ...ReviewInfo
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          ...PageInformation
        }
      }
    }
  }
  ${REPOSITORY_INFO}
  ${REVIEW_INFO}
  ${PAGE_INFORMATION}
`;

export const GET_ME = gql`
  query getMe {
    me {
      id
      username
    }
  }
`;