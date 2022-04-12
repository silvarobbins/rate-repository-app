import { useParams } from "react-router-native";

import useRepository from '../../hooks/useRepository';
import SingleRepositoryViewContainer from './SingleRepositoryViewContainer'


const SingleRepositoryView = () => {
  const { id } = useParams();

  const { repository, reviews } = useRepository({ id });

  console.log('repo:', repository)

  return(
    <SingleRepositoryViewContainer repository={repository} reviews={reviews}/>
  )

};

export default SingleRepositoryView;