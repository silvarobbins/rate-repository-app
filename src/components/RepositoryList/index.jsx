import { View } from 'react-native';
import { useDebounce } from "use-debounce";
import React, {useState, useEffect} from 'react';

import useRepositories from '../../hooks/useRepositories';
import ListHeader from './ListHeader';
import RepositoryListContainer from './RepositoryListContainer';


const RepositoryList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState();
  const [variables, setVariables] = useState();
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const { repositories, fetchMore } = useRepositories({
    first: 10,
    ...variables
  });

  const onChangeSearch = query => setSearchQuery(query);

  const onPress = (variables, sortBy) => {
    setSort(sortBy);
    setVariables(variables);
  };

  const onEndReach = () => {
    fetchMore();
  };

  useEffect(() => {
    setVariables({ searchKeyword: debouncedSearchQuery });
  }, [debouncedSearchQuery]);

  return (
    <View style={{ flex: 1 }}>
      <ListHeader searchQuery={searchQuery} onChangeSearch={onChangeSearch} onPress={onPress} sort={sort}/>
      <RepositoryListContainer 
        repositories={repositories} 
        onEndReach={onEndReach}
      />
    </View>
  );
};

export default RepositoryList;