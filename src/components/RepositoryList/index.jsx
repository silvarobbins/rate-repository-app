import { View } from 'react-native';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    <View>
      <RepositoryListContainer repositories={repositories}/>
    </View>
  );
};

export default RepositoryList;