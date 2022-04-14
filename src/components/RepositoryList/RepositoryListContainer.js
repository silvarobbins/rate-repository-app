import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "../RepositoryItem"

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => (
  <RepositoryItem repository={item} showDetails={false}/>
);

const RepositoryListContainer = ({repositories, onEndReach}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  

  return(
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.1}
    />
  )
}

export default RepositoryListContainer