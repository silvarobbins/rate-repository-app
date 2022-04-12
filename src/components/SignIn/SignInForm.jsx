import { View, Pressable, StyleSheet } from "react-native";

import theme from "../../theme";
import Text from "../Text";
import FormikTextInput from "../FormikTextInput"

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    marginTop: 10,
    borderRadius: 3
  },
  buttonText: {
    color: 'white'
  }
});


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
