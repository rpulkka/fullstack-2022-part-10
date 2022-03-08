import { Pressable } from 'react-native'
import Text from './Text'
import { Link } from "react-router-native"

const AppBarTab = (props) => {
  return (
    <Pressable>
      <Link to={props.link}>
        <Text color='white' fontWeight='bold' fontSize='heading' style={{ padding: 20 }}>{props.title}</Text>
      </Link>
    </Pressable>
  )
}

export default AppBarTab