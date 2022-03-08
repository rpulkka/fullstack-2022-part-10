import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  error: {
    borderColor: theme.colors.error
  }
})

const TextInput = ({ style, error, secure, ...props }) => {
  const textInputStyle = [style, error && styles.error]

  return <NativeTextInput style={textInputStyle} secureTextEntry={secure} {...props} />
}

export default TextInput