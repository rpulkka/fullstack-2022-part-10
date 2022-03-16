import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import useCredentials from '../hooks/useCredentials'
import useSignOut from '../hooks/useSignOut'
import AppBarTab from './AppBarTab'
import Text from './Text'
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
  const { credentials } = useCredentials()
  const signOut = useSignOut()

  const signedIn = credentials
    ? credentials
    : null

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <AppBarTab title={'Repositories'} link={'/'} />
        {
          signedIn !== null && signedIn !== undefined ?
            <AppBarTab title={'Create a review'} link={'/rate'} />
            : null
        }
        {
          signedIn === null || signedIn === undefined ?
            <AppBarTab title={'Sign in'} link={'/signin'} />
            : null
        }
        {
          signedIn === null || signedIn === undefined ?
            <AppBarTab title={'Sign up'} link={'/signup'} />
            : null
        }
        {
          signedIn !== null && signedIn !== undefined ?
            <Pressable onPress={async () => { await signOut() }}>
              <Text color='white' fontWeight='bold' fontSize='heading' style={{ padding: 20 }}>{'Sign out'}</Text>
            </Pressable>
            : null
        }
      </ScrollView>
    </View>
  )
}

export default AppBar