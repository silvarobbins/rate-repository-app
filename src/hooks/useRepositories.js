import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const { data, error, loading, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: "cache-and-network",
      variables,
    }
  );

  const repositories = data?.repositories;
  return {
    repositories,
    error,
    loading,
    ...result,
  };
};



export default useRepositories;
