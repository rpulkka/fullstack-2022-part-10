import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'

const RepositoryScreen = () => {

  let { id } = useParams()

  const { repository } = useRepository(id)

  if (repository === undefined || repository === null) {
    return <></>
  } else {
    return (
      <RepositoryItem repository={repository} renderLink />
    )
  }
}

export default RepositoryScreen