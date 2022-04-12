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


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
      <Button onPress={onSubmit} text={'Sign in'}/>
    </View>
  );
};

export default SignInForm;
