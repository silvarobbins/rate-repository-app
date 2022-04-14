import { View, StyleSheet } from "react-native";

import FormikTextInput from "../FormikTextInput"
import Button from "../Button";

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: 10,
  },
});


const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="owner" placeholder="Repository owner name" />
      <FormikTextInput name="name" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="review" placeholder="Review" />
      <Button onClick={onSubmit} text={'Create a review'}/>
    </View>
  );
};

export default ReviewForm;
