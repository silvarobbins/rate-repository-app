import { FlatList, View, StyleSheet } from "react-native";

import RepositoryInfo from "./RepositoryInfo";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => (
  <ReviewItem review={item}/>
);

const SingleRepositoryViewContainer = ({repository, reviews}) => {
  const reviewNodes = reviews
    ? reviews.map(edge => edge.node)
    : [];

  console.log(reviewNodes)
  return(
    <>
      <RepositoryInfo repository={repository}/>
      <FlatList
        data={reviewNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
      />
    </>
  )
}

export default SingleRepositoryViewContainer