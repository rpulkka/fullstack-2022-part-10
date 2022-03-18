import { FlatList, StyleSheet, View } from 'react-native'
import useCredentials from '../hooks/useCredentials'
import ReviewContainer from './ReviewContainer'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  info: {
    marginBottom: 10
  }
})

const ItemSeparator = () => <View style={styles.separator} />

const ReviewList = () => {

  const { credentials, refetch } = useCredentials({ includeReviews: true })

  if (credentials === undefined || credentials === null) {
    return <></>
  } else {
    return (
      <FlatList
        data={credentials.reviews.edges}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewContainer review={item.node} refetch={refetch} />}
        keyExtractor={(item) => item.node.id}
      />
    )
  }
}

export default ReviewList