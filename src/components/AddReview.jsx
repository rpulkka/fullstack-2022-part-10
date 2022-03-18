import { Pressable, StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-native'
import Text from './Text'
import useRate from '../hooks/useRate'
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

export const AddReviewContainer = ({ onSubmit }) => {
  const AddReviewForm = ({ onSubmit }) => {
    return (
      <View>
        <FormikTextInput name='owner' placeholder='Repository owner name' />
        <FormikTextInput name='name' placeholder='Repository name' />
        <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
        <FormikTextInput name='review' placeholder='Review' multiline />
        <Pressable onPress={onSubmit} style={styles.button}>
          <Text color='white' fontWeight='bold' fontSize='heading'>Create a review</Text>
        </Pressable>
      </View>
    )
  }

  const initialValues = {
    owner: '',
    name: '',
    rating: '',
    review: ''
  }

  const validationSchema = yup.object().shape({
    owner: yup
      .string()
      .required('Repository owner name is required'),
    name: yup
      .string()
      .required('Repository name is required'),
    rating: yup
      .number()
      .typeError('Rating must be a number')
      .min(0, 'Rating must be at least 0')
      .max(100, 'Rating must be at most 100')
  })

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <AddReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignIn = () => {

  const [rate] = useRate()
  const navigate = useNavigate()

  const onSubmit = async (values) => {

    const { owner, name, rating, review } = values
    const numericalRating = parseInt(rating)

    try {
      const { data } = await rate({ owner, name, numericalRating, review })
      console.log(data)
      navigate('/repository/' + data.createReview.repository.id)
    } catch (e) {
      console.log(e)
    }
  }

  return <AddReviewContainer onSubmit={onSubmit}></AddReviewContainer>
}

export default SignIn