import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';

import CreateReviewContainer from './CreateReviewContainer';
import { CREATE_REVIEW } from '../../graphql/mutations';


const CreateReview = () => {
  const [createReview, { error }] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { owner, name, rating, review } = values;
    const parsedRating = +rating;

    try {
      const { data } = await createReview({
        variables: {
          review: {
            ownerName :owner, 
            repositoryName :name,
            rating: parsedRating,
            text: review 
          }
        }
      });

      if (data?.createReview) {
        navigate(`/`, { replace: true });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CreateReviewContainer onSubmit={onSubmit}/>
  );
};

export default CreateReview;