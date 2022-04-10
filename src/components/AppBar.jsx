import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';
import theme from '../theme';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary
  },
  text: {
    padding: 5,
    color: '#FFFFFF'
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to={'/'}>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to={'/signin'}>
          <Text style={styles.text}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  )
};

export default AppBar;