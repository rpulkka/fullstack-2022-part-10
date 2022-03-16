import { Pressable, StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-native'
import Text from './Text'
import useSignIn from '../hooks/useSignIn'
import useSignUp from '../hooks/useSignUp'
import FormikTextInput from './FormikTextInput'
import theme from '../theme'

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 20,
    width: '95%',
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    alignItems: 'center'
  },
})

export const SignUpContainer = ({ onSubmit }) => {
  const SignUpForm = ({ onSubmit }) => {
    return (
      <View>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secure />
        <FormikTextInput name="passwordConfirmation" placeholder="Password confirmation" secure />
        <Pressable onPress={onSubmit} style={styles.button}>
          <Text color='white' fontWeight='bold' fontSize='heading'>Sign up</Text>
        </Pressable>
      </View>
    )
  }

  const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: '',
  }

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required')
      .min('1')
      .max('30'),
    password: yup
      .string()
      .required('Password is required')
      .min('5')
      .max('50'),
    passwordConfirmation: yup
      .string()
      .required('Password confirmation is required')
      .oneOf([yup.ref('password'), null], 'Password confirmation must match the chosen password')
  })

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignUp = () => {

  const [signIn] = useSignIn()
  const [signUp] = useSignUp()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const { data } = await signUp({ username, password })
      console.log(data)
      await signIn({ username, password })
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return <SignUpContainer onSubmit={onSubmit}></SignUpContainer>
}

export default SignUp