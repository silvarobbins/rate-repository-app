import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';

import SignUpContainer from './SignUpContainer';
import { SIGN_UP } from '../../graphql/mutations';
import useSignIn from '../../hooks/useSignIn';


const SignUp = () => {
  const [signUp, { error }] = useMutation(SIGN_UP);
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password, passwordConfirmation } = values;

    try {
      const {data} = await signUp({
        variables: {
          user: {
            username,
            password
          }
        }
      });

      console.log(data)
      if (data?.createUser) {
        await signIn({ username, password });
        navigate("/", { replace: true });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit}/>
  );
};

export default SignUp;