import { Searchbar } from 'react-native-paper';

const RepoSearchbar = ({searchQuery, onChangeSearch}) => {

  return (
    <Searchbar
      placeholder="Search from repositories"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default RepoSearchbar;