import { TextInput as NativeTextInput } from 'react-native'

const TextInput = ({ style, error, secure, ...props }) => {
  const textInputStyle = [style]

  return <NativeTextInput style={textInputStyle} secureTextEntry={secure} {...props} />
}

export default TextInput