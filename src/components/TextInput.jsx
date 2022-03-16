import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  error: {
    borderColor: theme.colors.error
  }
})

const TextInput = ({ style, error, secure, multiline, ...props }) => {
  const textInputStyle = [style, error && styles.error]

  return <NativeTextInput style={textInputStyle} secureTextEntry={secure} multiline={multiline} {...props} />
}

export default TextInput