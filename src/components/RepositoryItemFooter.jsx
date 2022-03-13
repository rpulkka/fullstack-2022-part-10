import { StyleSheet, View } from 'react-native'
import Text from './Text'

const RepositoryItemFooter = (props) => {

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    item: {
      padding: 10,
      alignItems: 'center'
    }
  })

  const roundToThousands = (count) => {
    if (count < 1000) {
      return count
    }

    let countToString = '' + count
    let thousands = countToString.slice(0, -3)
    let hundreds = Math.round(countToString.slice(-3) / 100) * 100 + ''
    let suffix = hundreds.substring(0, 1) === '0' ? 'k' : '.' + hundreds.substring(0, 1) + 'k'
    return thousands + suffix
  }

  return (
    <View style={styles.container} testID='repositoryItemFooter'>
      <View style={styles.item}>
        <Text fontSize='heading' fontWeight='bold'>{roundToThousands(props.repository.stargazersCount)}</Text>
        <Text color='textSecondary' fontSize='heading'>Stars</Text>
      </View>
      <View style={styles.item}>
        <Text fontSize='heading' fontWeight='bold'>{roundToThousands(props.repository.forksCount)}</Text>
        <Text color='textSecondary' fontSize='heading'>Forks</Text>
      </View>
      <View style={styles.item}>
        <Text fontSize='heading' fontWeight='bold'>{roundToThousands(props.repository.reviewCount)}</Text>
        <Text color='textSecondary' fontSize='heading'>Reviews</Text>
      </View>
      <View style={styles.item}>
        <Text fontSize='heading' fontWeight='bold'>{roundToThousands(props.repository.ratingAverage)}</Text>
        <Text color='textSecondary' fontSize='heading'>Rating</Text>
      </View>
    </View>
  )
}

export default RepositoryItemFooter