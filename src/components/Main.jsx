import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import RepositoryOverview from './RepositoryOverview'
import ReviewList from './ReviewList'
import SignIn from './SignIn'
import SignUp from './SignUp'
import AddReview from './AddReview'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='/repository/:id' element={<RepositoryOverview />} exact />
        <Route path='/reviews' element={<ReviewList />} exact />
        <Route path='/signin' element={<SignIn />} exact />
        <Route path='/signup' element={<SignUp />} exact />
        <Route path='/rate' element={<AddReview />} exact />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  )
}

export default Main