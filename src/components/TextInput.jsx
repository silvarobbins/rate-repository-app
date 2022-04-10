import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  field: {
    width: 200,
    padding: 10,
    marginTop: 10,
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 3
  },
  errorField: {
    width: 200,
    padding: 10,
    marginTop: 10,
    borderColor: '#d73a4a',
    borderWidth: 1,
    borderRadius: 3
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = ()=> {
    if (error) {
      return styles.errorField
    }
    else {
      return styles.field
    }
  };

  return <NativeTextInput style={textInputStyle()} {...props} />;
};

export default TextInput;