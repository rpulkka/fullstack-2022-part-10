import { Alert, Pressable, StyleSheet, View } from 'react-native'
import { Link } from 'react-router-native'
import useCredentials from '../hooks/useCredentials'
import useDelete from '../hooks/useDelete'
import ReviewItem from './ReviewItem'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  blueButton: {
    margin: 10,
    padding: 20,
    flex: 1,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    alignItems: 'center'
  },
  redButton: {
    margin: 10,
    padding: 20,
    flex: 1,
    borderRadius: 5,
    backgroundColor: theme.colors.error,
    alignItems: 'center'
  },
})

const ReviewContainer = ({ review, refetch }) => {

  const [deleteReview] = useDelete()

  const deletionAlert = () =>
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'CANCEL',
          onPress: () => null
        },
        {
          text: 'DELETE',
          onPress: async () => {
            try {
              const { data } = await deleteReview({ id: review.id })
              console.log(data)
              refetch({ includeReviews: true })
            } catch (e) {
              console.log(e)
            }
          }
        }
      ]
    )

  return (
    <View style={styles.container}>
      <ReviewItem review={review} onList={true} />
      <View style={styles.buttonsContainer}>
        <Link to={'/repository/' + review.repository.id} style={styles.blueButton}>
          <Text color='white' fontWeight='bold' fontSize='heading'>View</Text>
        </Link>
        <Pressable style={styles.redButton} onPress={() => deletionAlert()} >
          <Text color='white' fontWeight='bold' fontSize='heading'>Delete</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ReviewContainer