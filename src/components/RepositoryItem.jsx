import { Text, View } from 'react-native'

const RepositoryItem = (props) => {
  return (
    <View>
      <Text>Full name: {props.repository.fullName}</Text>
      <Text>Description: {props.repository.description}</Text>
      <Text>Language: {props.repository.language}</Text>
      <Text>Stars: {props.repository.stargazersCount}</Text>
      <Text>Forks: {props.repository.forksCount}</Text>
      <Text>Reviews: {props.repository.reviewCount}</Text>
      <Text>Rating: {props.repository.ratingAverage}</Text>
    </View>
  )
}

export default RepositoryItem