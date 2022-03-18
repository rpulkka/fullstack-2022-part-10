import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { Searchbar } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import { useDebounce } from 'use-debounce'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  picker: {
    margin: 20,
  },
  searchBar: {
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 10,
    width: '95%'
  }
})

const ItemSeparator = () => <View style={styles.separator} />

export class RepositoryListContainer extends React.Component {

  renderHeader = () => {

    const props = this.props

    return (
      <View>
        <Searchbar
          placeholder='Search repositories'
          onChangeText={value => props.setFilter(value)}
          value={props.filter}
          style={styles.searchBar}
        />
        <Picker
          selectedValue={props.order}
          onValueChange={itemValue => {
            props.setOrder(itemValue)
          }}
          style={styles.picker}
        >
          <Picker.Item label='Latest repositories' value={'CREATED_AT DESC'} />
          <Picker.Item label='Highest rated repositories' value={'RATING_AVERAGE DESC'} />
          <Picker.Item label='Lowest rated repositories' value={'RATING_AVERAGE ASC'} />
        </Picker>
      </View>
    )
  }

  render() {
    return (
      <FlatList
        data={this.props.repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Pressable onPress={() => this.props.navigate('/repository/' + item.id)}>
            <RepositoryItem repository={item} />
          </Pressable>
        )}
        ListHeaderComponent={this.renderHeader}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    )
  }
}

const RepositoryList = () => {

  const [filter, setFilter] = useState('')
  const [searchKeyword] = useDebounce(filter, 1000)
  const [order, setOrder] = useState('CREATED_AT DESC')
  const { repositories, fetchMore } = useRepositories({orderBy: order.split(' ')[0], orderDirection: order.split(' ')[1], searchKeyword: searchKeyword, first: 8})
  const navigate = useNavigate()

  const onEndReach = () => {
    fetchMore()
  }

  let repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return <RepositoryListContainer
    navigate={navigate}
    filter={filter}
    setFilter={setFilter}
    order={order}
    setOrder={setOrder}
    repositoryNodes={repositoryNodes}
    onEndReach={onEndReach}
  />
}

export default RepositoryList