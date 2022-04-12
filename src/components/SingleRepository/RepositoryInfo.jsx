import RepositoryItem from "../RepositoryItem";

const RepositoryInfo = ({ repository }) => {
  if (!repository) {
    return null
  }
  return (
    <RepositoryItem repository={repository} showDetails={true}/>
  )
};

export default RepositoryInfo