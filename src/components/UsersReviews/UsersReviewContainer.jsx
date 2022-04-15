import { FlatList, View, StyleSheet, Alert } from "react-native";

import ReviewItem from "./ReviewItem";
import { DELETE_REVIEW } from "../../graphql/mutations";
import { GET_ME } from "../../graphql/queries";
import { useMutation } from "@apollo/client";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UsersReviewsContainer = ({reviews}) => {
  const [deleteReview] = useMutation(DELETE_REVIEW)

  const renderItem = ({ item }) => (
    <ReviewItem review={item} onDelete={deleteAlert} />
  );

  const onDelete = async (id) => {
    console.log(id)
    await deleteReview({
      variables: { id },
      refetchQueries: [
        {
          query: GET_ME,
          variables: {
            includeReviews: true
          },
        },
      ],
    })
  }
  

  const deleteAlert = (id) => {
      Alert.alert(
        "Delete review",
        "Are you sure you want to delete this review",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK", onPress: () => onDelete(id) }
        ]
    );
  }

  return(
    <>
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
      />
    </>
  )
}

export default UsersReviewsContainer