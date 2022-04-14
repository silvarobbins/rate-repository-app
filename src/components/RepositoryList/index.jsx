import { View } from 'react-native';
import React, {useState, useEffect} from 'react';

import useRepositories from '../../hooks/useRepositories';
import ListHeader from './ListHeader';
import RepositoryListContainer from './RepositoryListContainer';


const RepositoryList = () => {
  const [sort, setSort] = useState();
  const [variables, setVariables] = useState();

  const { repositories } = useRepositories({
    ...variables
  });

  const onPress = (variables, sortBy) => {
    setSort(sortBy);
    setVariables(variables);
  };



  return (
    <View>
      <ListHeader onPress={onPress} sort={sort}/>
      <RepositoryListContainer repositories={repositories}/>
    </View>
  );
};

export default RepositoryList;