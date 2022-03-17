import { FlatList, StyleSheet, View } from 'react-native'
import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import useReviews from '../hooks/useReviews'
import RepositoryItem from './RepositoryItem'
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  info: {
    marginBottom: 10
  }
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryInfo = (repositoryObject) => {
  return (
    <View style={styles.info}>
      <RepositoryItem repository={repositoryObject.repository} renderLink />
    </View>
  )
}

const RepositoryScreen = () => {

  let { id } = useParams()
  const { repository } = useRepository(id)
  const { reviews, fetchMore } = useReviews({ repositoryId: id, first: 5 })

  const onEndReach = () => {
    fetchMore()
  }

  if (reviews === undefined || repository === undefined || reviews === null || repository === null) {
    return <></>
  } else {
    return (
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item.node} />}
        keyExtractor={(item) => item.node.id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    )
  }
}

export default RepositoryScreen