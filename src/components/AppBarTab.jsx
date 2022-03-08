import { Pressable } from 'react-native'
import Text from './Text'

const AppBarTab = () => {
  return (
    <Pressable>
      <Text color='white' fontWeight='bold' fontSize='heading' style={{ padding: 20 }}>{'Repositories'}</Text>
    </Pressable>
  )
}

export default AppBarTab