import { useParams } from "react-router-native";

import useRepository from '../../hooks/useRepository';
import SingleRepositoryViewContainer from './SingleRepositoryViewContainer'


const SingleRepositoryView = () => {
  const { id } = useParams();

  const { repository, reviews, fetchMore } = useRepository({ first: 5, id });

  const onEndReach = () => {
    fetchMore();
  };

  return(
    <SingleRepositoryViewContainer repository={repository} reviews={reviews} 
    onEndReach={onEndReach}/>
  )

};

export default SingleRepositoryView;