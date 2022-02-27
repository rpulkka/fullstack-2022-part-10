import { Pressable, StyleSheet, View } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  
})

const AppBarTab = () => {
  return (
    <Pressable>
      <Text color='white' fontWeight='bold' fontSize='heading' style={{ padding: 20 }}>{'Repositories'}</Text>
    </Pressable>
  )
}

export default AppBarTab