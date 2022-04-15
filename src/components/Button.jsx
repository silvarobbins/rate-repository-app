import { Text, Pressable, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  basicButton: {
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
    color: 'white',
    fontWeight: 'bold'
  }
})

const Button = ({ style, onClick, text, ...props }) => {
  const buttonStyle = [
    styles.basicButton,
    style,
  ];
  return(
  <Pressable onPress={onClick} style={buttonStyle} {...props}>
    <Text style={styles.buttonText}>{text}</Text>
  </Pressable>)
};

export default Button;