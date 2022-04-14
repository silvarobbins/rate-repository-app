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


const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
      <FormikTextInput name="passwordConfirmation" placeholder="Password confirmation" secureTextEntry={true}/>
      <Button onClick={onSubmit} text={'Sign up'}/>
    </View>
  );
};

export default SignUpForm;
