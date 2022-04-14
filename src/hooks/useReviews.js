import { useQuery } from "@apollo/client";

import { GET_ME } from "../graphql/queries";

const useReviews = (variables) => {
  const { data, error, loading, ...result } = useQuery(
    GET_ME,
    {
      fetchPolicy: "cache-and-network",
      variables,
    }
  );

  const reviews = data?.authorizedUser.reviews.edges;
  return {
    reviews,
    error,
    loading,
    ...result,
  };
};

export default useReviews;