import { Pressable, StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-native'
import Text from './Text'
import useSignIn from '../hooks/useSignIn'
import FormikTextInput from './FormikTextInput'
import theme from '../theme'

const SignIn = () => {

  const [signIn] = useSignIn()
  const navigate = useNavigate()

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

  const SignInForm = ({ onSubmit }) => {
    return (
      <View>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secure />
        <Pressable onPress={onSubmit} style={styles.button}>
          <Text color='white' fontWeight='bold' fontSize='heading'>Sign in</Text>
        </Pressable>
      </View>
    )
  }

  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const { data } = await signIn({ username, password })
      console.log(data)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required')
  })

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

export default SignIn