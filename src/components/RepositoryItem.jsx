import { Image, StyleSheet, View } from 'react-native'
import Text from './Text'
import theme from '../theme'
import RepositoryItemFooter from './RepositoryItemFooter'

const RepositoryItem = (props) => {

  const styles = StyleSheet.create({
    background: {
      backgroundColor: theme.colors.white
    },
    container: {
      flexDirection: 'row',
      padding: 10
    },
    imageContainer: {
      flex: 1
    },
    image: {
      height: 70,
      width: 70,
      borderRadius: 5
    },
    paragraphContainer: {
      paddingHorizontal: 20,flex: 5
    },
    title: {
      marginBottom: 10
    },
    stamp: {
      backgroundColor: theme.colors.primary,
      borderRadius: 5,
      alignSelf: 'flex-start',
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginTop: 10
    }
  })  

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.repository.ownerAvatarUrl }} />
        </View>
        <View style={styles.paragraphContainer}>
          <Text fontSize='heading' fontWeight='bold' style={styles.title}>{props.repository.fullName}</Text>
          <Text color='textSecondary' fontSize='heading'>{props.repository.description}</Text>
          <View style={styles.stamp}>
            <Text color='white' fontSize='heading'>{props.repository.language}</Text>
          </View>
        </View>
      </View>
      <RepositoryItemFooter repository={props.repository} />
    </View>
  )
}

export default RepositoryItem