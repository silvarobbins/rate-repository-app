import { gql } from "@apollo/client";

export const REPOSITORY_INFO = gql`
  fragment RepositoryInfo on Repository {
    id
    fullName
    ratingAverage
    reviewCount
    forksCount
    stargazersCount
    ownerAvatarUrl
    description
    language
  }
`;


export const PAGE_INFORMATION = gql`
  fragment PageInformation on PageInfo {
    hasNextPage
    startCursor
    endCursor
  }
`;

export const REVIEW_INFO = gql`
  fragment ReviewInfo on Review {
    id
    rating
    createdAt
    text
  }
`;