import useReviews from '../../hooks/useReviews';
import UsersReviewsContainer from "./UsersReviewContainer";

const UsersReviews = () => {
  const { reviews } = useReviews({ includeReviews: true });

  const reviewNodes = reviews
    ? reviews.map(edge => edge.node)
    : [];
    

  return(
    <UsersReviewsContainer reviews={reviewNodes}/>
  )

};

export default UsersReviews;