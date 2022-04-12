import { useParams } from "react-router-native";

import useRepository from '../../hooks/useRepository';
import RepositoryItem from '../RepositoryItem';


const SingleRepositoryView = () => {
  const { id } = useParams();

  const { repository } = useRepository({ id });

  console.log('repo:', repository)

  if (!repository) {
    return null
  }
  return (
    <RepositoryItem repository={repository} showDetails={true}/>
  )
};

export default SingleRepositoryView;