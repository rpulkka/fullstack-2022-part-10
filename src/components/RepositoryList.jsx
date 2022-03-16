import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { Picker } from '@react-native-picker/picker'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  picker: {
    margin: 20,
  }
})

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositoriesCreatedAt, repositoriesRatingDesc, repositoriesRatingAsc, navigate }) => {

  const [order, setOrder] = useState('latest')

  let repositoryNodes = repositoriesCreatedAt && order === 'latest'
    ? repositoriesCreatedAt.edges.map(edge => edge.node)
    : repositoriesRatingDesc && order === 'rated_desc'
      ? repositoriesRatingDesc.edges.map(edge => edge.node)
      : repositoriesRatingAsc && order === 'rated_asc'
        ? repositoriesRatingAsc.edges.map(edge => edge.node)
        : []

  const PickerComponent = () => {
    return (
      <Picker
        selectedValue={order}
        onValueChange={itemValue => {
          setOrder(itemValue)

        }}
        style={styles.picker}
      >
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="rated_desc" />
        <Picker.Item label="Lowest rated repositories" value="rated_asc" />
      </Picker>
    )
  }

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate('/repository/' + item.id)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
      ListHeaderComponent={() => <PickerComponent />}
    />
  )
}

const RepositoryList = () => {

  const repositoriesCreatedAt = useRepositories({ orderBy: 'CREATED_AT', orderDirection: 'DESC'}).repositories
  const repositoriesRatingDesc = useRepositories({ orderBy: 'RATING_AVERAGE', orderDirection: 'DESC'}).repositories
  const repositoriesRatingAsc = useRepositories({ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC'}).repositories

  const navigate = useNavigate()

  return <RepositoryListContainer
    repositoriesCreatedAt={repositoriesCreatedAt}
    repositoriesRatingDesc={repositoriesRatingDesc}
    repositoriesRatingAsc={repositoriesRatingAsc}
    navigate={navigate}
  />
}

export default RepositoryList