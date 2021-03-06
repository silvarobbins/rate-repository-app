import { useContext } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import { useQuery, useApolloClient } from '@apollo/client';

import Text from '../Text';
import theme from '../../theme';
import Constants from 'expo-constants';
import { GET_ME } from '../../graphql/queries';
import AuthStorageContext from '../../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary
  },
  text: {
    padding: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
    borderLeftWidth: 2,
    borderLeftColor: 'white',
  }
});

const AppBar = () => {
  const { data } = useQuery(GET_ME);

  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to={'/'}>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {data?.me ? (
          <>
            <Link onPress={logout} to={'/signin'}>
              <Text style={styles.text}>Sign out</Text>
            </Link>
            <Link to={'/myreviews'}>
              <Text style={styles.text}>My reviews</Text>
            </Link>
          </>
        ) : (
          <>
            <Link to={'/signin'}>
              <Text style={styles.text}>Sign in</Text>
            </Link>
            <Link to={'/signup'}>
              <Text style={styles.text}>Sign up</Text>
            </Link>
          </>
        )}
        <Link to={'/create-review'}>
          <Text style={styles.text}>Create a review</Text>
        </Link>
      </ScrollView>
    </View>
  )
};

export default AppBar;