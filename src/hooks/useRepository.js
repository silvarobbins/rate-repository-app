import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (variables) => {
  const { data, error, loading, fetchMore, ...result } = useQuery(
    GET_REPOSITORY,
    {
      fetchPolicy: "cache-and-network",
      variables,
    }
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repository: {
            ...fetchMoreResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
                ...previousResult.repository.reviews.edges,
                ...fetchMoreResult.repository.reviews.edges,
              ],
            },
          },
        };
        return nextResult;
      }
    });
  };

  const repository = data?.repository;
  const reviews = data?.repository.reviews.edges;

  return {
    repository,
    reviews,
    error,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};



export default useRepository;
