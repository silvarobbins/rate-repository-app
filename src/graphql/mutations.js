import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation authenticateMutation($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;