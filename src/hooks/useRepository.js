import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (variables) => {
  const { data, error, loading, ...result } = useQuery(
    GET_REPOSITORY,
    {
      fetchPolicy: "cache-and-network",
      variables,
    }
  );

  const repository = data?.repository;
  return {
    repository,
    error,
    loading,
    ...result,
  };
};



export default useRepository;
