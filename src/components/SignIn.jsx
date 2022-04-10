import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import Text from './Text';
import FormikTextInput from './FormikTextInput'
import theme from '../theme';

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

const initialValues = {
  username: '',
  password: ''
}

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
}

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;