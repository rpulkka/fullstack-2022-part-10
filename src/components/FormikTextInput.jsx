import { StyleSheet } from 'react-native'
import { useField } from 'formik'
import TextInput from './TextInput'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  textInput: {
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    borderWidth: 1,
    fontSize: theme.fontSizes.heading,
    margin: 10,
    padding: 20,
    width: '95%'
  },
  errorText: {
    marginTop: 5
  }
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.textInput}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput