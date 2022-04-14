import { Formik } from 'formik';
import * as yup from 'yup';

import SignUpForm from './SignUpForm';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match")
    .required('Password confirmation is required')
});


const SignUpContainer = ({onSubmit}) => {
  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUpContainer;