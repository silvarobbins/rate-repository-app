import { Text, Pressable, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    width: '100%',
    backgroundColor: theme.colors.primary,
    padding: 5,
    marginTop: 10,
    borderRadius: 3,
    alignItems: 'center'
  },
  buttonText: {
    margin: 5,
    color: 'white'
  }
})

const Button = ({ onClick, text }) => {
  return(
  <Pressable onPress={onClick} style={styles.button}>
    <Text style={styles.buttonText}>{text}</Text>
  </Pressable>)
};

export default Button;