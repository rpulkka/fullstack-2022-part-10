import { StyleSheet, View } from 'react-native'
import { format } from 'date-fns'
import theme from '../theme'
import Text from './Text'

const ReviewItem = ({ review, onList }) => {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      flexDirection: 'row',
      padding: 10
    },
    iconContainer: {
      borderColor: theme.colors.primary,
      borderWidth: 3,
      height: 50,
      width: 50,
      borderRadius: 25,
      marginRight: 10,
      flex: 1
    },
    iconText: {
      paddingHorizontal: 8,
      paddingVertical: 5
    },
    textContainer: {
      flex: 7
    },
    dateText: {
      marginVertical: 5
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text color={'primary'} fontWeight={'bold'} fontSize={'heading'} style={styles.iconText}>{review.rating}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text fontSize={'subheading'} fontWeight={'bold'}>{ onList ? review.repository.name : review.user.username }</Text>
        <Text color={'textSecondary'} style={styles.dateText}>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  )
}

export default ReviewItem