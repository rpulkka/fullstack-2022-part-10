import { ScrollView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundPrimary
  },
  scrollView: {
    flexDirection: 'row'
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <AppBarTab title={'Repositories'} link={'/'} />
        <AppBarTab title={'Sign in'} link={'/signin'} />
      </ScrollView>
    </View>
  )
}

export default AppBar